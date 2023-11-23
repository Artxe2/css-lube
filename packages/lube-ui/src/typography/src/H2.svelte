<script>
/** @type {{ classs?: string }} */
const { classs = "" } = $props()
</script>

<h2 class="bold fs=3.5 @!sm@fs=2
		{classs}"><slot></slot></h2>