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
				<span>TODO... Resources</span><br /><br />
				<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada lorem et placerat fringilla. Aliquam odio neque, pellentesque non ex in, suscipit dictum nibh. Donec id vulputate enim. Vivamus nisl lacus, fermentum ut est ut, mollis efficitur dui. In nec augue feugiat, molestie turpis sit amet, euismod tellus. Praesent lectus purus, maximus non pellentesque eu, iaculis vitae mauris. Maecenas convallis et massa eget sollicitudin. Proin mauris odio, auctor in neque quis, dignissim sollicitudin erat. Curabitur lectus nibh, maximus vitae pellentesque sed, rutrum sed augue.
					Aenean imperdiet iaculis dolor, vitae bibendum erat varius ut. Suspendisse faucibus auctor ligula, vitae dapibus arcu lacinia et. Maecenas nec leo pharetra, varius nisl eget, aliquam mauris. Phasellus rhoncus sollicitudin est vitae efficitur. Curabitur ornare quam sed diam tempor varius. Maecenas risus lorem, pellentesque eget purus vel, elementum posuere nulla. Praesent blandit bibendum accumsan. Etiam blandit sapien eget tortor commodo, et sagittis augue lacinia. Proin sed sodales augue, et consectetur ante. Aliquam quis odio sit amet dolor aliquam sodales. Donec dignissim euismod magna eget sollicitudin.
		
					Sed gravida augue odio, in lobortis nunc consectetur quis. Maecenas consectetur, nulla vel sodales eleifend, nibh ipsum mollis nibh, a rutrum ipsum nibh at nulla. Praesent ut nulla et sem semper faucibus quis quis dui. Praesent non suscipit dolor, et finibus nulla. Duis euismod enim ut orci aliquam, eu ornare nisl iaculis. Maecenas congue mattis augue a facilisis. Praesent rhoncus elit quam, congue rutrum est ultrices sit amet. Proin fermentum euismod est sit amet euismod. Maecenas blandit purus non maximus sagittis. Quisque elementum fringilla convallis. Nulla eget quam quis nulla vulputate finibus vitae vel nisi. Proin imperdiet magna vitae diam rutrum pretium. Aliquam nisl lectus, imperdiet eget ipsum id, sagittis fermentum erat. Nam placerat pharetra consectetur.
					
					Vestibulum ut vestibulum sapien. Nullam et est quis ipsum tempor fermentum. Cras placerat sollicitudin risus ac semper. Fusce metus diam, varius non enim eget, pretium cursus nulla. Cras imperdiet arcu at posuere ullamcorper. Nullam mollis turpis non ante tincidunt, vitae egestas diam euismod. Suspendisse ut diam ultrices, tempus elit sit amet, luctus orci. Fusce scelerisque arcu mi, nec imperdiet velit varius ac. Duis condimentum posuere eros, quis pretium felis suscipit non. Integer aliquam volutpat est, et tristique velit suscipit eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus ac quam at ornare.
					
					Nunc facilisis iaculis metus, et dignissim ipsum lobortis quis. Nullam commodo magna magna, vel auctor leo dignissim a. Suspendisse molestie pretium luctus. Donec porttitor sollicitudin pharetra. Nullam molestie non neque vel vehicula. Morbi venenatis in metus rhoncus mollis. Pellentesque et varius diam, at malesuada ipsum. Praesent eget arcu metus. Nam finibus metus a lorem elementum consectetur. Curabitur eu luctus massa. Proin commodo libero imperdiet massa accumsan convallis. Sed quis est quis mauris faucibus rhoncus vel nec neque. Aenean vitae justo eu leo consequat finibus eu vel lacus.</span>
			</DocumentContentDiv>
		</div>
	</div>
</RootDiv>