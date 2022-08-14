<script lang="ts">
import RootDiv from "src/layouts/RootDiv.svelte";
import AppBar from "src/components/tissues/AppBar.svelte";
import SideNavigation from "src/components/organs/docu/SideNavigation.svelte";
import DocumentContentDiv from "src/layouts/docu/DocumentContentDiv.svelte";
</script>

<AppBar />
<RootDiv>
    <div class="flex row h=100% xw=100% bgc=--primary20 @dark@bgc=--primary-d">
        <SideNavigation />
        <div class="fg=1 flex-shrink=1">
            <DocumentContentDiv>
                <slot></slot>
            </DocumentContentDiv>
        </div>
    </div>
</RootDiv>