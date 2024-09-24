<script lang="ts">
	export let data: Uint8Array = new Uint8Array();

	function formatHexdump(data: Uint8Array): string {
		let result = '';
		for (let i = 0; i < data.length; i += 16) {
			const chunk = data.slice(i, i + 16);
			const hex = Array.from(chunk)
				.map((byte) => byte.toString(16).padStart(2, '0'))
				.join(' ');
			const ascii = Array.from(chunk)
				.map((byte) => (byte >= 32 && byte <= 126 ? String.fromCharCode(byte) : '.'))
				.join('');
			result += `${i.toString(16).padStart(8, '0')}  ${hex.padEnd(48, ' ')}  |${ascii.padEnd(16, ' ')}|\n`;
		}
		return result;
	}
</script>

<pre
	class="h-full overflow-auto whitespace-pre-wrap p-4 font-mono text-sm dark:text-white">{formatHexdump(
		data
	)}</pre>
