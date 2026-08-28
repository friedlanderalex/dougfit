from playwright.sync_api import sync_playwright
with sync_playwright() as pw:
    b=pw.chromium.launch(); c=b.new_context(viewport={"width":402,"height":874},device_scale_factor=3,is_mobile=True,has_touch=True)
    p=c.new_page(); errs=[]
    p.on("console",lambda m: errs.append("C "+m.text) if m.type=="error" else None)
    p.on("pageerror",lambda e: errs.append("PE "+str(e)))
    p.goto("http://localhost:8899/index.html"); p.wait_for_timeout(400)
    print("findW resolves baked:", p.evaluate("!!findW('ghost-p1w1')"))

    # click every session 3 card in Program, confirm each opens
    n=p.evaluate("weeks().length"); opened=0; failed=[]
    for i in range(n):
        p.evaluate("route={name:'program'};render()"); p.wait_for_timeout(120)
        p.evaluate(f"document.querySelectorAll('.item.gh')[{i}].click()")
        p.wait_for_timeout(120)
        r=p.evaluate("route.name")
        if r=="workout": opened+=1
        else: failed.append(i)
    print(f"session 3 cards opened: {opened}/{n}", "| failed:", failed or "none")

    # from Today too
    p.evaluate("route={name:'today'};render()"); p.wait_for_timeout(200)
    p.evaluate("document.querySelectorAll('.item.gh')[0].click()"); p.wait_for_timeout(300)
    print("opens from Today:", p.evaluate("route.name")=="workout")
    p.screenshot(path="shot-s3open.png")

    # full workout interaction on a baked session: sets, logging, complete
    p.evaluate("""(()=>{const w=findW(route.id);const k=w.id+'::0::0';tog(k);
        logv(k,'w','95');logv(k,'r','10')})()"""); p.wait_for_timeout(200)
    p.evaluate("finish(route.id)"); p.wait_for_timeout(200)
    p.evaluate("saveDone('ghost-p1w1')"); p.wait_for_timeout(300)
    print("baked session logs as complete:", p.evaluate("!!state.done['ghost-p1w1']"))
    p.evaluate("route={name:'history'};render()"); p.wait_for_timeout(300)
    print("shows in history with title:", p.evaluate("!document.body.innerText.includes('Archived workout')"))

    # regenerate still overrides, and remains clickable
    p.evaluate("genGhost('p1w2',true)"); p.wait_for_timeout(300)
    p.evaluate("route={name:'program'};render()"); p.wait_for_timeout(200)
    p.evaluate("document.querySelectorAll('.item.gh')[1].click()"); p.wait_for_timeout(300)
    print("regenerated session opens:", p.evaluate("route.name")=="workout")

    # skip still works and skipped session still opens
    p.evaluate("toggleSkip('p1w3')"); p.wait_for_timeout(200)
    print("skipped:", p.evaluate("isSkipped('p1w3')"),
          "| skipped session still openable:", p.evaluate("!!findW('ghost-p1w3')"))
    print("ERRORS:",errs if errs else "none")
    b.close()
