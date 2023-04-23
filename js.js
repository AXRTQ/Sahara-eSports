<script>
		function toggleColor() {
			const body = document.querySelector('body');
			const btn = document.querySelector('button');
			if (body.classList.contains('dark')) {
				body.classList.remove('dark');
				btn.textContent = 'Сменить на темную тему';
			} else {
				body.classList.add('dark');
				btn.textContent = 'Сменить на светлую тему';
			}
		}
	</script>