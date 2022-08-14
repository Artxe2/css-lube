<script>
import { base } from "$app/paths"
import { page } from "$app/stores";
import NavigationSection from "./NavigationSection.svelte";

let open
const useActive = (el) => {
    page.subscribe(v => {
        let active = (location.origin + v.url.pathname).startsWith(el.href)
        el.classList.toggle("bold", active)
        el.classList.toggle("c=--primary", active)
        el.classList.toggle("@dark@c=--primary-l", active)
    })
}
</script>

<div class="z=900 @md@none absolute h=100% flex tt=.5s {open ? "l=20 tf=rotate(180deg)" : "l=0"}">
    <button class="m=auto fs=5 lh=1 user-select=none {open ? "c=--primary;bold" : ":hover/c=--primary;bold"}"
        on:click={() => open = !open}
    >></button>
</div>
<div class="z=900 @!md@absolute;tt=margin-left_.5s bg=white @dark@bg=--primary-d w=20 ml=0 h=100%{open ? "" : " @!md@ml=-20"}">
    <div class="h=4"></div>
    <div class="pl=1.5 h=calc(100%-4em) oy=auto ::-webkit-scrollbar/w=0.5 ::-webkit-scrollbar-track/bgc=#3b599850 ::-webkit-scrollbar-thumb/bgc=--primary;br=0.25">
        <div class="h=2"></div>
        <ul>
            <li>
                <a href="{base}/docu" use:useActive>
                    <button class=":hover/c=--primary @dark@:hover/c=--primary-l">Documentation</button>
                </a>
            </li>
            <li>
                <a href="{base}/instant-ui" use:useActive>
                    <button class=":hover/c=--primary @dark@:hover/c=--primary-l">Components</button>
                </a>
            </li>
            <li>
                <a href="{base}/resources" use:useActive>
                    <button class=":hover/c=--primary @dark@:hover/c=--primary-l">Resources</button>
                </a>
            </li>
            <NavigationSection
                title="Getting Started"
                list={[
                    { href: "/docu/installation", text: "Installation" }
                ]}
            />
            <NavigationSection
                title="Core Concepts"
                list={[
                    { href: "/docu/utility-first", text: "Utility-First Fundamentals" },
                    { href: "/docu/runtime-build", text: "Runtime Build Style" },
                    { href: "/docu/basic", text: "Basic" },
                    { href: "/docu/selector", text: "Selector & Pseudo Class" },
                    { href: "/docu/abbreviation", text: "Abbreviation" },
                    { href: "/docu/priority", text: "Priority" },
                    { href: "/docu/media-query", text: "Media Query" },
                    { href: "/docu/dark-mode", text: "Dark mode" }
                ]}
            />
            <NavigationSection
                title="Customizing"
                list={[
                    { href: "/docu/css-reset", text: "CSS Reset" },
                    { href: "/docu/key-abbr", text: "Key Abbreviation" },
                    { href: "/docu/value-abbr", text: "Value Abbreviation" },
                    { href: "/docu/default-unit", text: "Default Unit" }
                ]}
            />
            <NavigationSection
                title="Atomic Design"
                list={[
                    { href: "/docu/what-is-atomic", text: "What is Atomic Design" },
                    { href: "/docu/problem-of-atomic", text: "Problem of Atomic" },
                    { href: "/docu/atomic-for-instant", text: "New Atomic for Instant CSS" }
                ]}
            />
        </ul>
        <div class="h=2"></div>
    </div>
</div>