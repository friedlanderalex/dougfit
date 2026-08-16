from playwright.sync_api import sync_playwright
import json
with sync_playwright() as pw:
    b=pw.chromium.launch(); c=b.new_context(viewport={"width":402,"height":874},is_mobile=True,has_touch=True)
    p=c.new_page(); errs=[]
    p.on("pageerror",lambda e: errs.append("PE "+str(e)))
    p.goto("http://localhost:8899/index.html"); p.wait_for_timeout(300)

    # simulate a v1 save written by the ORIGINAL build (no v, no rest fields)
    old = {"done":{"p1w1a":{"wid":"p1w1a","date":"2026-07-01","duration":"52","notes":"felt strong",
                            "sets":{"p1w1a::0::0":True},"logs":{"p1w1a::0::0":{"w":"145","r":"8"}}},
                   "p2w3b":{"wid":"p2w3b","date":"2026-07-20","duration":"41","notes":"",
                            "sets":{},"logs":{"p2w3b::1::0":{"w":"95","r":"8"}}},
                   "ZZZremoved":{"wid":"ZZZremoved","date":"2026-07-25","duration":"30","notes":"old workout",
                            "sets":{},"logs":{}}},
           "active":None,"ghosts":{},"edits":{"p1w1a::Hex Press":{"n":"Hex Press","sr":"4 / 10","no":"corrected"}},
           "activities":[],"tab":"today"}
    p.evaluate("s=>localStorage.setItem('dougfit.v1',JSON.stringify(s))", old)
    p.reload(); p.wait_for_timeout(500)

    print("schema after migrate:", p.evaluate("state.v"))
    print("completions preserved:", p.evaluate("Object.keys(state.done).length"))
    print("edit preserved:", json.dumps(p.evaluate("state.edits['p1w1a::Hex Press']")))
    print("new defaults added:", p.evaluate("({rest:state.restDefault,on:state.restOn})"))
    print("pre-migration snapshot kept:", p.evaluate("!!localStorage.getItem('dougfit.v1.pre1')"))
    print("last-time weight survived:", json.dumps(p.evaluate("lastFor('Smith Machine Bench')")))
    print("streak/next still compute:", p.evaluate("({next:nextUp().title,done:Object.keys(state.done).length})"))

    # removed workout still visible in history, not crashing
    p.evaluate("route={name:'history'};render()"); p.wait_for_timeout(300)
    print("archived row shown:", p.evaluate("document.body.innerText.includes('Archived workout')"))
    p.screenshot(path="shot-history.png")

    # simulate SECOND upgrade: app adds a new workout, ids unchanged
    p.evaluate("""DougFit.addWorkouts([{id:'p3w2a',program:3,week:2,slot:1,title:'New Session',
        focus:['back'],source:'Program 3 Week 2.pdf',warmup:'none',
        groups:[{name:'Group 1',ex:[{n:'Deadlift with Hex Bar',sr:'3 / 10'}]}]}])""")
    p.wait_for_timeout(300)
    print("after adding a workout -> total:",p.evaluate("ALL.length"),
          "| completions intact:",p.evaluate("Object.keys(state.done).length"))

    # merge-import: older backup must not delete newer data
    p.evaluate("""state.done['p1w4a']={wid:'p1w4a',date:'2026-08-10',duration:'44',notes:'new one',sets:{},logs:{}};save()""")
    before=p.evaluate("Object.keys(state.done).length")
    p.evaluate("""(()=>{const j={done:{p1w1a:{wid:'p1w1a',date:'2026-06-01',duration:'30',notes:'older',sets:{},logs:{}}}};
      let added=0;Object.entries(j.done).forEach(([id,d])=>{const cur=state.done[id];
        if(!cur||new Date(d.date)>new Date(cur.date)){state.done[id]=d;added++}});save();return added})()""")
    print("merge kept newer:", p.evaluate("state.done['p1w1a'].notes"), "| count:",
          p.evaluate("Object.keys(state.done).length"), "(was",before,")")
    print("ERRORS:",errs if errs else "none")
    b.close()
