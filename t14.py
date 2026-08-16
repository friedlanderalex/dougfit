from playwright.sync_api import sync_playwright
with sync_playwright() as pw:
    b=pw.chromium.launch(); c=b.new_context(viewport={"width":402,"height":874},device_scale_factor=3,is_mobile=True,has_touch=True)
    p=c.new_page(); errs=[]
    p.on("console",lambda m: errs.append("C "+m.text) if m.type=="error" else None)
    p.on("pageerror",lambda e: errs.append("PE "+str(e)))
    p.goto("http://localhost:8899/index.html"); p.wait_for_timeout(500)
    print("baked ghosts present:",p.evaluate("Object.keys(BAKED_GHOSTS).length"),
          "| state.ghosts empty:",p.evaluate("Object.keys(state.ghosts).length"))
    print("all weeks have a session 3:",p.evaluate("weeks().every(wk=>!!getGhost(wk))"))
    # CRITICAL: skipping/ignoring session 3 must never block progression
    print("nextUp ignores ghosts:",p.evaluate("ALL.every(w=>!w.ghost)"), "| next:",p.evaluate("nextUp().title"))
    p.evaluate("""['p1w1a','p1w1b'].forEach(id=>state.done[id]={wid:id,date:'2026-08-13',duration:'40',notes:'',sets:{},logs:{}});save();render()""")
    p.wait_for_timeout(200)
    print("after doing Doug's 2 of wk1, next =",p.evaluate("nextUp().title"),
          "| week:",p.evaluate("nextUp().week"),"(should advance past wk1 without session 3)")
    # skip behaviour
    p.evaluate("toggleSkip('p1w2')"); p.wait_for_timeout(200)
    print("skipped p1w2:",p.evaluate("isSkipped('p1w2')"),
          "| still not blocking:",p.evaluate("nextUp().title"))
    p.evaluate("route={name:'program'};render()"); p.wait_for_timeout(300)
    print("GENERATED badges on program tab:",p.evaluate("[...document.querySelectorAll('.pill.g')].length"))
    p.screenshot(path="shot-prog3.png")
    p.evaluate("route={name:'today'};render()"); p.wait_for_timeout(300)
    p.screenshot(path="shot-today3.png")
    p.evaluate("open_('ghost-p1w3')"); p.wait_for_timeout(400)
    p.screenshot(path="shot-s3b.png")
    # regenerate still overrides baked
    p.evaluate("genGhost('p1w3',true)"); p.wait_for_timeout(400)
    print("regen overrides baked:",p.evaluate("!!state.ghosts['p1w3']"),
          "| exercises:",p.evaluate("state.ghosts['p1w3'].groups.flatMap(g=>g.ex).length"))
    # persists across reload
    p.reload(); p.wait_for_timeout(500)
    print("after reload -> skip kept:",p.evaluate("isSkipped('p1w2')"),
          "| regen kept:",p.evaluate("!!state.ghosts['p1w3']"),
          "| completions:",p.evaluate("Object.keys(state.done).length"))
    print("ERRORS:",errs if errs else "none")
    b.close()
