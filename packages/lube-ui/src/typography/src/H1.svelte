<script>
/** @type {{ classs?: string }} */
const { classs = "" } = $props()
</script>

<h1 class="fs=6 @!lg@fs=4 bold
		{classs}"><slot></slot></h1>