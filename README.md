RANDOMIZER
==========

jquery plugin putting images in random position in a given container.

Version
----

0.4.0

0.3.0

0.2.0

0.1.1

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
		$('.container').randomizer();
	});
</script>
```

Options

```sh
resize: false, //set true for container resizeable
fade: false, //set true for enable fade effect, animation must be false
fadeSpeed:"400", // fade effect speed 
animation: false, //set true to move elements with animation, fade must be false 
animationSpeed: 500, // animation speed
linerAnimation: false, // elements animated liner
linerAnimationSpeed: 500, // animation speed
repeat: true, // when this variable is true elements will change there position every repeatInterval time
repeatInterval: 5000, // repeat interval using with repeat: true
randomSize: true, // randomly change width of elements
```

Options example
```sh
<script>
	$(function() {
		$('.container').randomizer({
			resize: true,
			animation: true,
			animationSpeed: 500,
		});
	});
</script>
```


License
----

MIT
