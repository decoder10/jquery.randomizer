RANDOMIZER
==========

jquery plugin putting images in random position in a given container.

Version
----

0.1.0

How to use
--------------

Connect jQuery library and jquery.randomizer.js script files

```sh
<script src="jquery.min.js"></script>
<script src="jquery.randomizer.js"></script>
```

HTML part
```sh
<div class="container">
	<img src="images/1.png" alt=""/>
	<img src="images/2.png" alt=""/>
	<img src="images/3.png" alt=""/>
	<img src="images/4.png" alt=""/>
</div>
```

CSS part

```sh
<style>
	.container {
		width: 100%;
		height: 100%;
		position: relative;
	}
	img {
		width: 80px;
		position: absolute;
	}
</style>
    
```

JavaScript part

```sh
<script>
	$(function() {
		$('.container').randomizer({
			resize: true
		});
	});
</script>
```


License
----

MIT