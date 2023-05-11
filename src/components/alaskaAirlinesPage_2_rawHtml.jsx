const alaskaAirlinesPage_2_rawHtml = 
        `<!DOCTYPE html>
<html lang=en style>
<meta charset=utf-8>
<meta http-equiv=X-UA-Compatible content="IE=edge">
<meta name=viewport content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
<style>
	@font-face {
		font-family: Circular;
		src: url(data:font/x-woff;base64,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) format("woff");
		font-weight: 700;
		font-style: normal
	}

	html {
		font-family: sans-serif;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%
	}

	a:active,
	a:hover {
		outline: 0
	}

	svg:not(:root) {
		overflow: hidden
	}

	select {
		font: inherit
	}

	select {
		text-transform: none
	}

	input[type=submit] {
		-webkit-appearance: button;
		cursor: pointer
	}

	*,
	:after,
	:before {
		-webkit-box-sizing: border-box;
		box-sizing: border-box
	}

	html {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0)
	}

	body {
		font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
		line-height: 1.72857;
		background-color: #fff
	}

	input {
		font-family: inherit
	}

	a:focus,
	a:hover {
		color: #00131e
	}

	img {
		vertical-align: middle
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0)
	}

	.sr-only-focusable:active,
	.sr-only-focusable:focus {
		position: static;
		width: auto;
		height: auto;
		margin: 0;
		overflow: visible;
		clip: auto
	}

	h1,
	h2,
	h5 {
		font-weight: 700;
		line-height: 1.1
	}

	h4,
	h5 {
		margin-top: 12px;
		margin-bottom: 12px
	}

	.text-center {
		text-align: center
	}

	ul {
		margin-top: 0;
		margin-bottom: 12px
	}

	table {
		background-color: transparent
	}

	caption {
		padding-top: 8px;
		padding-bottom: 8px
	}

	label {
		max-width: 100%;
		margin-bottom: 5px
	}

	.form-control {
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
		-webkit-transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
		-o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
		-webkit-transition: border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
		transition: border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
		transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out
	}

	.form-control:focus {
		border-color: #66afe9;
		outline: 0;
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6)
	}

	.form-control::-webkit-input-placeholder {
		color: #666
	}

	.btn {
		display: inline-block;
		margin-bottom: 0;
		text-align: center;
		vertical-align: middle;
		-ms-touch-action: manipulation;
		touch-action: manipulation;
		background-image: none;
		white-space: nowrap;
		line-height: 1.72857;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none
	}

	.btn.active.focus,
	.btn.active:focus,
	.btn.focus,
	.btn:active.focus,
	.btn:active:focus,
	.btn:focus,
	.containerx a.btn:focus,
	.containerx a.focus.btn {
		outline: thin dotted;
		outline: 5px auto -webkit-focus-ring-color;
		outline-offset: -2px
	}

	.btn.focus,
	.btn:focus,
	.btn:hover,
	.containerx a.btn:focus,
	.containerx a.btn:hover,
	.containerx a.focus.btn {
		color: #333;
		text-decoration: none
	}

	.btn.active,
	.btn:active,
	.containerx a.active.btn,
	.containerx a.btn:active {
		outline: 0;
		background-image: none;
		-webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125)
	}

	.btn-primary.active,
	.btn-primary.focus,
	.btn-primary:active,
	.btn-primary:focus,
	.btn-primary:hover,
	.open>.btn-primary.dropdown-toggle {
		color: #fff;
		background-color: #2f5607;
		border-color: #294c06
	}

	.btn-primary.active,
	.btn-primary:active,
	.open>.btn-primary.dropdown-toggle {
		background-image: none
	}

	.btn-link {
		border-radius: 0
	}

	.btn-link,
	.btn-link:active {
		background-color: transparent;
		-webkit-box-shadow: none;
		box-shadow: none
	}

	.btn-link,
	.btn-link:active,
	.btn-link:focus,
	.btn-link:hover {
		border-color: transparent
	}

	.btn-link:focus,
	.btn-link:hover {
		color: #00131e;
		text-decoration: underline;
		background-color: transparent
	}

	@-webkit-keyframes progress-bar-stripes {
		0% {
			background-position: 40px 0
		}

		to {
			background-position: 0 0
		}
	}

	@keyframes progress-bar-stripes {
		0% {
			background-position: 40px 0
		}

		to {
			background-position: 0 0
		}
	}

	.clearfix:after,
	.clearfix:before {
		content: " ";
		display: table
	}

	.clearfix:after {
		clear: both
	}

	.pull-right {
		float: right !important
	}

	.hidden {
		display: none !important;
		visibility: hidden !important
	}

	@-ms-viewport {
		width: device-width
	}

	@-webkit-keyframes bounce {

		0%,
		20%,
		53%,
		80%,
		to {
			-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}

		40%,
		43% {
			-webkit-animation-timing-function: cubic-bezier(.755, .05, .855, .06);
			animation-timing-function: cubic-bezier(.755, .05, .855, .06);
			-webkit-transform: translate3d(0, -30px, 0);
			transform: translate3d(0, -30px, 0)
		}

		70% {
			-webkit-animation-timing-function: cubic-bezier(.755, .05, .855, .06);
			animation-timing-function: cubic-bezier(.755, .05, .855, .06);
			-webkit-transform: translate3d(0, -15px, 0);
			transform: translate3d(0, -15px, 0)
		}

		90% {
			-webkit-transform: translate3d(0, -4px, 0);
			transform: translate3d(0, -4px, 0)
		}
	}

	@keyframes bounce {

		0%,
		20%,
		53%,
		80%,
		to {
			-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}

		40%,
		43% {
			-webkit-animation-timing-function: cubic-bezier(.755, .05, .855, .06);
			animation-timing-function: cubic-bezier(.755, .05, .855, .06);
			-webkit-transform: translate3d(0, -30px, 0);
			transform: translate3d(0, -30px, 0)
		}

		70% {
			-webkit-animation-timing-function: cubic-bezier(.755, .05, .855, .06);
			animation-timing-function: cubic-bezier(.755, .05, .855, .06);
			-webkit-transform: translate3d(0, -15px, 0);
			transform: translate3d(0, -15px, 0)
		}

		90% {
			-webkit-transform: translate3d(0, -4px, 0);
			transform: translate3d(0, -4px, 0)
		}
	}

	@-webkit-keyframes flash {

		0%,
		50%,
		to {
			opacity: 1
		}

		25%,
		75% {
			opacity: 0
		}
	}

	@keyframes flash {

		0%,
		50%,
		to {
			opacity: 1
		}

		25%,
		75% {
			opacity: 0
		}
	}

	@-webkit-keyframes pulse {
		0% {
			-webkit-transform: scaleX(1);
			transform: scaleX(1)
		}

		50% {
			-webkit-transform: scale3d(1.05, 1.05, 1.05);
			transform: scale3d(1.05, 1.05, 1.05)
		}

		to {
			-webkit-transform: scaleX(1);
			transform: scaleX(1)
		}
	}

	@keyframes pulse {
		0% {
			-webkit-transform: scaleX(1);
			transform: scaleX(1)
		}

		50% {
			-webkit-transform: scale3d(1.05, 1.05, 1.05);
			transform: scale3d(1.05, 1.05, 1.05)
		}

		to {
			-webkit-transform: scaleX(1);
			transform: scaleX(1)
		}
	}

	@-webkit-keyframes rubberBand {
		0% {
			-webkit-transform: scaleX(1);
			transform: scaleX(1)
		}

		30% {
			-webkit-transform: scale3d(1.25, .75, 1);
			transform: scale3d(1.25, .75, 1)
		}

		40% {
			-webkit-transform: scale3d(.75, 1.25, 1);
			transform: scale3d(.75, 1.25, 1)
		}

		50% {
			-webkit-transform: scale3d(1.15, .85, 1);
			transform: scale3d(1.15, .85, 1)
		}

		65% {
			-webkit-transform: scale3d(.95, 1.05, 1);
			transform: scale3d(.95, 1.05, 1)
		}

		75% {
			-webkit-transform: scale3d(1.05, .95, 1);
			transform: scale3d(1.05, .95, 1)
		}

		to {
			-webkit-transform: scaleX(1);
			transform: scaleX(1)
		}
	}

	@keyframes rubberBand {
		0% {
			-webkit-transform: scaleX(1);
			transform: scaleX(1)
		}

		30% {
			-webkit-transform: scale3d(1.25, .75, 1);
			transform: scale3d(1.25, .75, 1)
		}

		40% {
			-webkit-transform: scale3d(.75, 1.25, 1);
			transform: scale3d(.75, 1.25, 1)
		}

		50% {
			-webkit-transform: scale3d(1.15, .85, 1);
			transform: scale3d(1.15, .85, 1)
		}

		65% {
			-webkit-transform: scale3d(.95, 1.05, 1);
			transform: scale3d(.95, 1.05, 1)
		}

		75% {
			-webkit-transform: scale3d(1.05, .95, 1);
			transform: scale3d(1.05, .95, 1)
		}

		to {
			-webkit-transform: scaleX(1);
			transform: scaleX(1)
		}
	}

	@-webkit-keyframes shake {

		0%,
		to {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}

		10%,
		30%,
		50%,
		70%,
		90% {
			-webkit-transform: translate3d(-10px, 0, 0);
			transform: translate3d(-10px, 0, 0)
		}

		20%,
		40%,
		60%,
		80% {
			-webkit-transform: translate3d(10px, 0, 0);
			transform: translate3d(10px, 0, 0)
		}
	}

	@keyframes shake {

		0%,
		to {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}

		10%,
		30%,
		50%,
		70%,
		90% {
			-webkit-transform: translate3d(-10px, 0, 0);
			transform: translate3d(-10px, 0, 0)
		}

		20%,
		40%,
		60%,
		80% {
			-webkit-transform: translate3d(10px, 0, 0);
			transform: translate3d(10px, 0, 0)
		}
	}

	@-webkit-keyframes headShake {
		0% {
			-webkit-transform: translateX(0);
			transform: translateX(0)
		}

		6.5% {
			-webkit-transform: translateX(-6px) rotateY(-9deg);
			transform: translateX(-6px) rotateY(-9deg)
		}

		18.5% {
			-webkit-transform: translateX(5px) rotateY(7deg);
			transform: translateX(5px) rotateY(7deg)
		}

		31.5% {
			-webkit-transform: translateX(-3px) rotateY(-5deg);
			transform: translateX(-3px) rotateY(-5deg)
		}

		43.5% {
			-webkit-transform: translateX(2px) rotateY(3deg);
			transform: translateX(2px) rotateY(3deg)
		}

		50% {
			-webkit-transform: translateX(0);
			transform: translateX(0)
		}
	}

	@keyframes headShake {
		0% {
			-webkit-transform: translateX(0);
			transform: translateX(0)
		}

		6.5% {
			-webkit-transform: translateX(-6px) rotateY(-9deg);
			transform: translateX(-6px) rotateY(-9deg)
		}

		18.5% {
			-webkit-transform: translateX(5px) rotateY(7deg);
			transform: translateX(5px) rotateY(7deg)
		}

		31.5% {
			-webkit-transform: translateX(-3px) rotateY(-5deg);
			transform: translateX(-3px) rotateY(-5deg)
		}

		43.5% {
			-webkit-transform: translateX(2px) rotateY(3deg);
			transform: translateX(2px) rotateY(3deg)
		}

		50% {
			-webkit-transform: translateX(0);
			transform: translateX(0)
		}
	}

	@-webkit-keyframes swing {
		20% {
			-webkit-transform: rotate(15deg);
			transform: rotate(15deg)
		}

		40% {
			-webkit-transform: rotate(-10deg);
			transform: rotate(-10deg)
		}

		60% {
			-webkit-transform: rotate(5deg);
			transform: rotate(5deg)
		}

		80% {
			-webkit-transform: rotate(-5deg);
			transform: rotate(-5deg)
		}

		to {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg)
		}
	}

	@keyframes swing {
		20% {
			-webkit-transform: rotate(15deg);
			transform: rotate(15deg)
		}

		40% {
			-webkit-transform: rotate(-10deg);
			transform: rotate(-10deg)
		}

		60% {
			-webkit-transform: rotate(5deg);
			transform: rotate(5deg)
		}

		80% {
			-webkit-transform: rotate(-5deg);
			transform: rotate(-5deg)
		}

		to {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg)
		}
	}

	@-webkit-keyframes tada {
		0% {
			-webkit-transform: scaleX(1);
			transform: scaleX(1)
		}

		10%,
		20% {
			-webkit-transform: scale3d(.9, .9, .9) rotate(-3deg);
			transform: scale3d(.9, .9, .9) rotate(-3deg)
		}

		30%,
		50%,
		70%,
		90% {
			-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(3deg);
			transform: scale3d(1.1, 1.1, 1.1) rotate(3deg)
		}

		40%,
		60%,
		80% {
			-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg);
			transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg)
		}

		to {
			-webkit-transform: scaleX(1);
			transform: scaleX(1)
		}
	}

	@keyframes tada {
		0% {
			-webkit-transform: scaleX(1);
			transform: scaleX(1)
		}

		10%,
		20% {
			-webkit-transform: scale3d(.9, .9, .9) rotate(-3deg);
			transform: scale3d(.9, .9, .9) rotate(-3deg)
		}

		30%,
		50%,
		70%,
		90% {
			-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(3deg);
			transform: scale3d(1.1, 1.1, 1.1) rotate(3deg)
		}

		40%,
		60%,
		80% {
			-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg);
			transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg)
		}

		to {
			-webkit-transform: scaleX(1);
			transform: scaleX(1)
		}
	}

	@-webkit-keyframes wobble {
		0% {
			-webkit-transform: none;
			transform: none
		}

		15% {
			-webkit-transform: translate3d(-25%, 0, 0) rotate(-5deg);
			transform: translate3d(-25%, 0, 0) rotate(-5deg)
		}

		30% {
			-webkit-transform: translate3d(20%, 0, 0) rotate(3deg);
			transform: translate3d(20%, 0, 0) rotate(3deg)
		}

		45% {
			-webkit-transform: translate3d(-15%, 0, 0) rotate(-3deg);
			transform: translate3d(-15%, 0, 0) rotate(-3deg)
		}

		60% {
			-webkit-transform: translate3d(10%, 0, 0) rotate(2deg);
			transform: translate3d(10%, 0, 0) rotate(2deg)
		}

		75% {
			-webkit-transform: translate3d(-5%, 0, 0) rotate(-1deg);
			transform: translate3d(-5%, 0, 0) rotate(-1deg)
		}

		to {
			-webkit-transform: none;
			transform: none
		}
	}

	@keyframes wobble {
		0% {
			-webkit-transform: none;
			transform: none
		}

		15% {
			-webkit-transform: translate3d(-25%, 0, 0) rotate(-5deg);
			transform: translate3d(-25%, 0, 0) rotate(-5deg)
		}

		30% {
			-webkit-transform: translate3d(20%, 0, 0) rotate(3deg);
			transform: translate3d(20%, 0, 0) rotate(3deg)
		}

		45% {
			-webkit-transform: translate3d(-15%, 0, 0) rotate(-3deg);
			transform: translate3d(-15%, 0, 0) rotate(-3deg)
		}

		60% {
			-webkit-transform: translate3d(10%, 0, 0) rotate(2deg);
			transform: translate3d(10%, 0, 0) rotate(2deg)
		}

		75% {
			-webkit-transform: translate3d(-5%, 0, 0) rotate(-1deg);
			transform: translate3d(-5%, 0, 0) rotate(-1deg)
		}

		to {
			-webkit-transform: none;
			transform: none
		}
	}

	@-webkit-keyframes jello {

		0%,
		11.1%,
		to {
			-webkit-transform: none;
			transform: none
		}

		22.2% {
			-webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
			transform: skewX(-12.5deg) skewY(-12.5deg)
		}

		33.3% {
			-webkit-transform: skewX(6.25deg) skewY(6.25deg);
			transform: skewX(6.25deg) skewY(6.25deg)
		}

		44.4% {
			-webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
			transform: skewX(-3.125deg) skewY(-3.125deg)
		}

		55.5% {
			-webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
			transform: skewX(1.5625deg) skewY(1.5625deg)
		}

		66.6% {
			-webkit-transform: skewX(-.78125deg) skewY(-.78125deg);
			transform: skewX(-.78125deg) skewY(-.78125deg)
		}

		77.7% {
			-webkit-transform: skewX(.39063deg) skewY(.39063deg);
			transform: skewX(.39063deg) skewY(.39063deg)
		}

		88.8% {
			-webkit-transform: skewX(-.19531deg) skewY(-.19531deg);
			transform: skewX(-.19531deg) skewY(-.19531deg)
		}
	}

	@keyframes jello {

		0%,
		11.1%,
		to {
			-webkit-transform: none;
			transform: none
		}

		22.2% {
			-webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
			transform: skewX(-12.5deg) skewY(-12.5deg)
		}

		33.3% {
			-webkit-transform: skewX(6.25deg) skewY(6.25deg);
			transform: skewX(6.25deg) skewY(6.25deg)
		}

		44.4% {
			-webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
			transform: skewX(-3.125deg) skewY(-3.125deg)
		}

		55.5% {
			-webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
			transform: skewX(1.5625deg) skewY(1.5625deg)
		}

		66.6% {
			-webkit-transform: skewX(-.78125deg) skewY(-.78125deg);
			transform: skewX(-.78125deg) skewY(-.78125deg)
		}

		77.7% {
			-webkit-transform: skewX(.39063deg) skewY(.39063deg);
			transform: skewX(.39063deg) skewY(.39063deg)
		}

		88.8% {
			-webkit-transform: skewX(-.19531deg) skewY(-.19531deg);
			transform: skewX(-.19531deg) skewY(-.19531deg)
		}
	}

	@-webkit-keyframes bounceIn {

		0%,
		20%,
		40%,
		60%,
		80%,
		to {
			-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			animation-timing-function: cubic-bezier(.215, .61, .355, 1)
		}

		0% {
			opacity: 0;
			-webkit-transform: scale3d(.3, .3, .3);
			transform: scale3d(.3, .3, .3)
		}

		20% {
			-webkit-transform: scale3d(1.1, 1.1, 1.1);
			transform: scale3d(1.1, 1.1, 1.1)
		}

		40% {
			-webkit-transform: scale3d(.9, .9, .9);
			transform: scale3d(.9, .9, .9)
		}

		60% {
			opacity: 1;
			-webkit-transform: scale3d(1.03, 1.03, 1.03);
			transform: scale3d(1.03, 1.03, 1.03)
		}

		80% {
			-webkit-transform: scale3d(.97, .97, .97);
			transform: scale3d(.97, .97, .97)
		}

		to {
			opacity: 1;
			-webkit-transform: scaleX(1);
			transform: scaleX(1)
		}
	}

	@keyframes bounceIn {

		0%,
		20%,
		40%,
		60%,
		80%,
		to {
			-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			animation-timing-function: cubic-bezier(.215, .61, .355, 1)
		}

		0% {
			opacity: 0;
			-webkit-transform: scale3d(.3, .3, .3);
			transform: scale3d(.3, .3, .3)
		}

		20% {
			-webkit-transform: scale3d(1.1, 1.1, 1.1);
			transform: scale3d(1.1, 1.1, 1.1)
		}

		40% {
			-webkit-transform: scale3d(.9, .9, .9);
			transform: scale3d(.9, .9, .9)
		}

		60% {
			opacity: 1;
			-webkit-transform: scale3d(1.03, 1.03, 1.03);
			transform: scale3d(1.03, 1.03, 1.03)
		}

		80% {
			-webkit-transform: scale3d(.97, .97, .97);
			transform: scale3d(.97, .97, .97)
		}

		to {
			opacity: 1;
			-webkit-transform: scaleX(1);
			transform: scaleX(1)
		}
	}

	@-webkit-keyframes bounceInDown {

		0%,
		60%,
		75%,
		90%,
		to {
			-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			animation-timing-function: cubic-bezier(.215, .61, .355, 1)
		}

		0% {
			opacity: 0;
			-webkit-transform: translate3d(0, -3000px, 0);
			transform: translate3d(0, -3000px, 0)
		}

		60% {
			opacity: 1;
			-webkit-transform: translate3d(0, 25px, 0);
			transform: translate3d(0, 25px, 0)
		}

		75% {
			-webkit-transform: translate3d(0, -10px, 0);
			transform: translate3d(0, -10px, 0)
		}

		90% {
			-webkit-transform: translate3d(0, 5px, 0);
			transform: translate3d(0, 5px, 0)
		}

		to {
			-webkit-transform: none;
			transform: none
		}
	}

	@keyframes bounceInDown {

		0%,
		60%,
		75%,
		90%,
		to {
			-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			animation-timing-function: cubic-bezier(.215, .61, .355, 1)
		}

		0% {
			opacity: 0;
			-webkit-transform: translate3d(0, -3000px, 0);
			transform: translate3d(0, -3000px, 0)
		}

		60% {
			opacity: 1;
			-webkit-transform: translate3d(0, 25px, 0);
			transform: translate3d(0, 25px, 0)
		}

		75% {
			-webkit-transform: translate3d(0, -10px, 0);
			transform: translate3d(0, -10px, 0)
		}

		90% {
			-webkit-transform: translate3d(0, 5px, 0);
			transform: translate3d(0, 5px, 0)
		}

		to {
			-webkit-transform: none;
			transform: none
		}
	}

	@-webkit-keyframes bounceInLeft {

		0%,
		60%,
		75%,
		90%,
		to {
			-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			animation-timing-function: cubic-bezier(.215, .61, .355, 1)
		}

		0% {
			opacity: 0;
			-webkit-transform: translate3d(-3000px, 0, 0);
			transform: translate3d(-3000px, 0, 0)
		}

		60% {
			opacity: 1;
			-webkit-transform: translate3d(25px, 0, 0);
			transform: translate3d(25px, 0, 0)
		}

		75% {
			-webkit-transform: translate3d(-10px, 0, 0);
			transform: translate3d(-10px, 0, 0)
		}

		90% {
			-webkit-transform: translate3d(5px, 0, 0);
			transform: translate3d(5px, 0, 0)
		}

		to {
			-webkit-transform: none;
			transform: none
		}
	}

	@keyframes bounceInLeft {

		0%,
		60%,
		75%,
		90%,
		to {
			-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			animation-timing-function: cubic-bezier(.215, .61, .355, 1)
		}

		0% {
			opacity: 0;
			-webkit-transform: translate3d(-3000px, 0, 0);
			transform: translate3d(-3000px, 0, 0)
		}

		60% {
			opacity: 1;
			-webkit-transform: translate3d(25px, 0, 0);
			transform: translate3d(25px, 0, 0)
		}

		75% {
			-webkit-transform: translate3d(-10px, 0, 0);
			transform: translate3d(-10px, 0, 0)
		}

		90% {
			-webkit-transform: translate3d(5px, 0, 0);
			transform: translate3d(5px, 0, 0)
		}

		to {
			-webkit-transform: none;
			transform: none
		}
	}

	@-webkit-keyframes bounceInRight {

		0%,
		60%,
		75%,
		90%,
		to {
			-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			animation-timing-function: cubic-bezier(.215, .61, .355, 1)
		}

		0% {
			opacity: 0;
			-webkit-transform: translate3d(3000px, 0, 0);
			transform: translate3d(3000px, 0, 0)
		}

		60% {
			opacity: 1;
			-webkit-transform: translate3d(-25px, 0, 0);
			transform: translate3d(-25px, 0, 0)
		}

		75% {
			-webkit-transform: translate3d(10px, 0, 0);
			transform: translate3d(10px, 0, 0)
		}

		90% {
			-webkit-transform: translate3d(-5px, 0, 0);
			transform: translate3d(-5px, 0, 0)
		}

		to {
			-webkit-transform: none;
			transform: none
		}
	}

	@keyframes bounceInRight {

		0%,
		60%,
		75%,
		90%,
		to {
			-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			animation-timing-function: cubic-bezier(.215, .61, .355, 1)
		}

		0% {
			opacity: 0;
			-webkit-transform: translate3d(3000px, 0, 0);
			transform: translate3d(3000px, 0, 0)
		}

		60% {
			opacity: 1;
			-webkit-transform: translate3d(-25px, 0, 0);
			transform: translate3d(-25px, 0, 0)
		}

		75% {
			-webkit-transform: translate3d(10px, 0, 0);
			transform: translate3d(10px, 0, 0)
		}

		90% {
			-webkit-transform: translate3d(-5px, 0, 0);
			transform: translate3d(-5px, 0, 0)
		}

		to {
			-webkit-transform: none;
			transform: none
		}
	}

	@-webkit-keyframes bounceInUp {

		0%,
		60%,
		75%,
		90%,
		to {
			-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			animation-timing-function: cubic-bezier(.215, .61, .355, 1)
		}

		0% {
			opacity: 0;
			-webkit-transform: translate3d(0, 3000px, 0);
			transform: translate3d(0, 3000px, 0)
		}

		60% {
			opacity: 1;
			-webkit-transform: translate3d(0, -20px, 0);
			transform: translate3d(0, -20px, 0)
		}

		75% {
			-webkit-transform: translate3d(0, 10px, 0);
			transform: translate3d(0, 10px, 0)
		}

		90% {
			-webkit-transform: translate3d(0, -5px, 0);
			transform: translate3d(0, -5px, 0)
		}

		to {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}
	}

	@keyframes bounceInUp {

		0%,
		60%,
		75%,
		90%,
		to {
			-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			animation-timing-function: cubic-bezier(.215, .61, .355, 1)
		}

		0% {
			opacity: 0;
			-webkit-transform: translate3d(0, 3000px, 0);
			transform: translate3d(0, 3000px, 0)
		}

		60% {
			opacity: 1;
			-webkit-transform: translate3d(0, -20px, 0);
			transform: translate3d(0, -20px, 0)
		}

		75% {
			-webkit-transform: translate3d(0, 10px, 0);
			transform: translate3d(0, 10px, 0)
		}

		90% {
			-webkit-transform: translate3d(0, -5px, 0);
			transform: translate3d(0, -5px, 0)
		}

		to {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}
	}

	@-webkit-keyframes bounceOut {
		20% {
			-webkit-transform: scale3d(.9, .9, .9);
			transform: scale3d(.9, .9, .9)
		}

		50%,
		55% {
			opacity: 1;
			-webkit-transform: scale3d(1.1, 1.1, 1.1);
			transform: scale3d(1.1, 1.1, 1.1)
		}

		to {
			opacity: 0;
			-webkit-transform: scale3d(.3, .3, .3);
			transform: scale3d(.3, .3, .3)
		}
	}

	@keyframes bounceOut {
		20% {
			-webkit-transform: scale3d(.9, .9, .9);
			transform: scale3d(.9, .9, .9)
		}

		50%,
		55% {
			opacity: 1;
			-webkit-transform: scale3d(1.1, 1.1, 1.1);
			transform: scale3d(1.1, 1.1, 1.1)
		}

		to {
			opacity: 0;
			-webkit-transform: scale3d(.3, .3, .3);
			transform: scale3d(.3, .3, .3)
		}
	}

	@-webkit-keyframes bounceOutDown {
		20% {
			-webkit-transform: translate3d(0, 10px, 0);
			transform: translate3d(0, 10px, 0)
		}

		40%,
		45% {
			opacity: 1;
			-webkit-transform: translate3d(0, -20px, 0);
			transform: translate3d(0, -20px, 0)
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(0, 2000px, 0);
			transform: translate3d(0, 2000px, 0)
		}
	}

	@keyframes bounceOutDown {
		20% {
			-webkit-transform: translate3d(0, 10px, 0);
			transform: translate3d(0, 10px, 0)
		}

		40%,
		45% {
			opacity: 1;
			-webkit-transform: translate3d(0, -20px, 0);
			transform: translate3d(0, -20px, 0)
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(0, 2000px, 0);
			transform: translate3d(0, 2000px, 0)
		}
	}

	@-webkit-keyframes bounceOutLeft {
		20% {
			opacity: 1;
			-webkit-transform: translate3d(20px, 0, 0);
			transform: translate3d(20px, 0, 0)
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(-2000px, 0, 0);
			transform: translate3d(-2000px, 0, 0)
		}
	}

	@keyframes bounceOutLeft {
		20% {
			opacity: 1;
			-webkit-transform: translate3d(20px, 0, 0);
			transform: translate3d(20px, 0, 0)
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(-2000px, 0, 0);
			transform: translate3d(-2000px, 0, 0)
		}
	}

	@-webkit-keyframes bounceOutRight {
		20% {
			opacity: 1;
			-webkit-transform: translate3d(-20px, 0, 0);
			transform: translate3d(-20px, 0, 0)
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(2000px, 0, 0);
			transform: translate3d(2000px, 0, 0)
		}
	}

	@keyframes bounceOutRight {
		20% {
			opacity: 1;
			-webkit-transform: translate3d(-20px, 0, 0);
			transform: translate3d(-20px, 0, 0)
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(2000px, 0, 0);
			transform: translate3d(2000px, 0, 0)
		}
	}

	@-webkit-keyframes bounceOutUp {
		20% {
			-webkit-transform: translate3d(0, -10px, 0);
			transform: translate3d(0, -10px, 0)
		}

		40%,
		45% {
			opacity: 1;
			-webkit-transform: translate3d(0, 20px, 0);
			transform: translate3d(0, 20px, 0)
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(0, -2000px, 0);
			transform: translate3d(0, -2000px, 0)
		}
	}

	@keyframes bounceOutUp {
		20% {
			-webkit-transform: translate3d(0, -10px, 0);
			transform: translate3d(0, -10px, 0)
		}

		40%,
		45% {
			opacity: 1;
			-webkit-transform: translate3d(0, 20px, 0);
			transform: translate3d(0, 20px, 0)
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(0, -2000px, 0);
			transform: translate3d(0, -2000px, 0)
		}
	}

	@-webkit-keyframes fadeIn {
		0% {
			opacity: 0
		}

		to {
			opacity: 1
		}
	}

	@keyframes fadeIn {
		0% {
			opacity: 0
		}

		to {
			opacity: 1
		}
	}

	@-webkit-keyframes fadeInDown {
		0% {
			opacity: 0;
			-webkit-transform: translate3d(0, -100%, 0);
			transform: translate3d(0, -100%, 0)
		}

		to {
			opacity: 1;
			-webkit-transform: none;
			transform: none
		}
	}

	@keyframes fadeInDown {
		0% {
			opacity: 0;
			-webkit-transform: translate3d(0, -100%, 0);
			transform: translate3d(0, -100%, 0)
		}

		to {
			opacity: 1;
			-webkit-transform: none;
			transform: none
		}
	}

	@-webkit-keyframes fadeInDownBig {
		0% {
			opacity: 0;
			-webkit-transform: translate3d(0, -2000px, 0);
			transform: translate3d(0, -2000px, 0)
		}

		to {
			opacity: 1;
			-webkit-transform: none;
			transform: none
		}
	}

	@keyframes fadeInDownBig {
		0% {
			opacity: 0;
			-webkit-transform: translate3d(0, -2000px, 0);
			transform: translate3d(0, -2000px, 0)
		}

		to {
			opacity: 1;
			-webkit-transform: none;
			transform: none
		}
	}

	@-webkit-keyframes fadeInLeft {
		0% {
			opacity: 0;
			-webkit-transform: translate3d(-100%, 0, 0);
			transform: translate3d(-100%, 0, 0)
		}

		to {
			opacity: 1;
			-webkit-transform: none;
			transform: none
		}
	}

	@keyframes fadeInLeft {
		0% {
			opacity: 0;
			-webkit-transform: translate3d(-100%, 0, 0);
			transform: translate3d(-100%, 0, 0)
		}

		to {
			opacity: 1;
			-webkit-transform: none;
			transform: none
		}
	}

	@-webkit-keyframes fadeInLeftBig {
		0% {
			opacity: 0;
			-webkit-transform: translate3d(-2000px, 0, 0);
			transform: translate3d(-2000px, 0, 0)
		}

		to {
			opacity: 1;
			-webkit-transform: none;
			transform: none
		}
	}

	@keyframes fadeInLeftBig {
		0% {
			opacity: 0;
			-webkit-transform: translate3d(-2000px, 0, 0);
			transform: translate3d(-2000px, 0, 0)
		}

		to {
			opacity: 1;
			-webkit-transform: none;
			transform: none
		}
	}

	@-webkit-keyframes fadeInRight {
		0% {
			opacity: 0;
			-webkit-transform: translate3d(100%, 0, 0);
			transform: translate3d(100%, 0, 0)
		}

		to {
			opacity: 1;
			-webkit-transform: none;
			transform: none
		}
	}

	@keyframes fadeInRight {
		0% {
			opacity: 0;
			-webkit-transform: translate3d(100%, 0, 0);
			transform: translate3d(100%, 0, 0)
		}

		to {
			opacity: 1;
			-webkit-transform: none;
			transform: none
		}
	}

	@-webkit-keyframes fadeInRightBig {
		0% {
			opacity: 0;
			-webkit-transform: translate3d(2000px, 0, 0);
			transform: translate3d(2000px, 0, 0)
		}

		to {
			opacity: 1;
			-webkit-transform: none;
			transform: none
		}
	}

	@keyframes fadeInRightBig {
		0% {
			opacity: 0;
			-webkit-transform: translate3d(2000px, 0, 0);
			transform: translate3d(2000px, 0, 0)
		}

		to {
			opacity: 1;
			-webkit-transform: none;
			transform: none
		}
	}

	@-webkit-keyframes fadeInUp {
		0% {
			opacity: 0;
			-webkit-transform: translate3d(0, 100%, 0);
			transform: translate3d(0, 100%, 0)
		}

		to {
			opacity: 1;
			-webkit-transform: none;
			transform: none
		}
	}

	@keyframes fadeInUp {
		0% {
			opacity: 0;
			-webkit-transform: translate3d(0, 100%, 0);
			transform: translate3d(0, 100%, 0)
		}

		to {
			opacity: 1;
			-webkit-transform: none;
			transform: none
		}
	}

	@-webkit-keyframes fadeInUpBig {
		0% {
			opacity: 0;
			-webkit-transform: translate3d(0, 2000px, 0);
			transform: translate3d(0, 2000px, 0)
		}

		to {
			opacity: 1;
			-webkit-transform: none;
			transform: none
		}
	}

	@keyframes fadeInUpBig {
		0% {
			opacity: 0;
			-webkit-transform: translate3d(0, 2000px, 0);
			transform: translate3d(0, 2000px, 0)
		}

		to {
			opacity: 1;
			-webkit-transform: none;
			transform: none
		}
	}

	@-webkit-keyframes fadeOut {
		0% {
			opacity: 1
		}

		to {
			opacity: 0
		}
	}

	@keyframes fadeOut {
		0% {
			opacity: 1
		}

		to {
			opacity: 0
		}
	}

	@-webkit-keyframes fadeOutDown {
		0% {
			opacity: 1
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(0, 100%, 0);
			transform: translate3d(0, 100%, 0)
		}
	}

	@keyframes fadeOutDown {
		0% {
			opacity: 1
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(0, 100%, 0);
			transform: translate3d(0, 100%, 0)
		}
	}

	@-webkit-keyframes fadeOutDownBig {
		0% {
			opacity: 1
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(0, 2000px, 0);
			transform: translate3d(0, 2000px, 0)
		}
	}

	@keyframes fadeOutDownBig {
		0% {
			opacity: 1
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(0, 2000px, 0);
			transform: translate3d(0, 2000px, 0)
		}
	}

	@-webkit-keyframes fadeOutLeft {
		0% {
			opacity: 1
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(-100%, 0, 0);
			transform: translate3d(-100%, 0, 0)
		}
	}

	@keyframes fadeOutLeft {
		0% {
			opacity: 1
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(-100%, 0, 0);
			transform: translate3d(-100%, 0, 0)
		}
	}

	@-webkit-keyframes fadeOutLeftBig {
		0% {
			opacity: 1
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(-2000px, 0, 0);
			transform: translate3d(-2000px, 0, 0)
		}
	}

	@keyframes fadeOutLeftBig {
		0% {
			opacity: 1
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(-2000px, 0, 0);
			transform: translate3d(-2000px, 0, 0)
		}
	}

	@-webkit-keyframes fadeOutRight {
		0% {
			opacity: 1
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(100%, 0, 0);
			transform: translate3d(100%, 0, 0)
		}
	}

	@keyframes fadeOutRight {
		0% {
			opacity: 1
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(100%, 0, 0);
			transform: translate3d(100%, 0, 0)
		}
	}

	@-webkit-keyframes fadeOutRightBig {
		0% {
			opacity: 1
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(2000px, 0, 0);
			transform: translate3d(2000px, 0, 0)
		}
	}

	@keyframes fadeOutRightBig {
		0% {
			opacity: 1
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(2000px, 0, 0);
			transform: translate3d(2000px, 0, 0)
		}
	}

	@-webkit-keyframes fadeOutUp {
		0% {
			opacity: 1
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(0, -100%, 0);
			transform: translate3d(0, -100%, 0)
		}
	}

	@keyframes fadeOutUp {
		0% {
			opacity: 1
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(0, -100%, 0);
			transform: translate3d(0, -100%, 0)
		}
	}

	@-webkit-keyframes fadeOutUpBig {
		0% {
			opacity: 1
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(0, -2000px, 0);
			transform: translate3d(0, -2000px, 0)
		}
	}

	@keyframes fadeOutUpBig {
		0% {
			opacity: 1
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(0, -2000px, 0);
			transform: translate3d(0, -2000px, 0)
		}
	}

	@-webkit-keyframes flip {
		0% {
			-webkit-transform: perspective(400px) rotateY(-1turn);
			transform: perspective(400px) rotateY(-1turn);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out
		}

		40% {
			-webkit-transform: perspective(400px) translateZ(150px) rotateY(-190deg);
			transform: perspective(400px) translateZ(150px) rotateY(-190deg);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out
		}

		50% {
			-webkit-transform: perspective(400px) translateZ(150px) rotateY(-170deg);
			transform: perspective(400px) translateZ(150px) rotateY(-170deg);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in
		}

		80% {
			-webkit-transform: perspective(400px) scale3d(.95, .95, .95);
			transform: perspective(400px) scale3d(.95, .95, .95);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in
		}

		to {
			-webkit-transform: perspective(400px);
			transform: perspective(400px);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in
		}
	}

	@keyframes flip {
		0% {
			-webkit-transform: perspective(400px) rotateY(-1turn);
			transform: perspective(400px) rotateY(-1turn);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out
		}

		40% {
			-webkit-transform: perspective(400px) translateZ(150px) rotateY(-190deg);
			transform: perspective(400px) translateZ(150px) rotateY(-190deg);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out
		}

		50% {
			-webkit-transform: perspective(400px) translateZ(150px) rotateY(-170deg);
			transform: perspective(400px) translateZ(150px) rotateY(-170deg);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in
		}

		80% {
			-webkit-transform: perspective(400px) scale3d(.95, .95, .95);
			transform: perspective(400px) scale3d(.95, .95, .95);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in
		}

		to {
			-webkit-transform: perspective(400px);
			transform: perspective(400px);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in
		}
	}

	@-webkit-keyframes flipInX {
		0% {
			-webkit-transform: perspective(400px) rotateX(90deg);
			transform: perspective(400px) rotateX(90deg);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
			opacity: 0
		}

		40% {
			-webkit-transform: perspective(400px) rotateX(-20deg);
			transform: perspective(400px) rotateX(-20deg);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in
		}

		60% {
			-webkit-transform: perspective(400px) rotateX(10deg);
			transform: perspective(400px) rotateX(10deg);
			opacity: 1
		}

		80% {
			-webkit-transform: perspective(400px) rotateX(-5deg);
			transform: perspective(400px) rotateX(-5deg)
		}

		to {
			-webkit-transform: perspective(400px);
			transform: perspective(400px)
		}
	}

	@keyframes flipInX {
		0% {
			-webkit-transform: perspective(400px) rotateX(90deg);
			transform: perspective(400px) rotateX(90deg);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
			opacity: 0
		}

		40% {
			-webkit-transform: perspective(400px) rotateX(-20deg);
			transform: perspective(400px) rotateX(-20deg);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in
		}

		60% {
			-webkit-transform: perspective(400px) rotateX(10deg);
			transform: perspective(400px) rotateX(10deg);
			opacity: 1
		}

		80% {
			-webkit-transform: perspective(400px) rotateX(-5deg);
			transform: perspective(400px) rotateX(-5deg)
		}

		to {
			-webkit-transform: perspective(400px);
			transform: perspective(400px)
		}
	}

	@-webkit-keyframes flipInY {
		0% {
			-webkit-transform: perspective(400px) rotateY(90deg);
			transform: perspective(400px) rotateY(90deg);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
			opacity: 0
		}

		40% {
			-webkit-transform: perspective(400px) rotateY(-20deg);
			transform: perspective(400px) rotateY(-20deg);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in
		}

		60% {
			-webkit-transform: perspective(400px) rotateY(10deg);
			transform: perspective(400px) rotateY(10deg);
			opacity: 1
		}

		80% {
			-webkit-transform: perspective(400px) rotateY(-5deg);
			transform: perspective(400px) rotateY(-5deg)
		}

		to {
			-webkit-transform: perspective(400px);
			transform: perspective(400px)
		}
	}

	@keyframes flipInY {
		0% {
			-webkit-transform: perspective(400px) rotateY(90deg);
			transform: perspective(400px) rotateY(90deg);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
			opacity: 0
		}

		40% {
			-webkit-transform: perspective(400px) rotateY(-20deg);
			transform: perspective(400px) rotateY(-20deg);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in
		}

		60% {
			-webkit-transform: perspective(400px) rotateY(10deg);
			transform: perspective(400px) rotateY(10deg);
			opacity: 1
		}

		80% {
			-webkit-transform: perspective(400px) rotateY(-5deg);
			transform: perspective(400px) rotateY(-5deg)
		}

		to {
			-webkit-transform: perspective(400px);
			transform: perspective(400px)
		}
	}

	@-webkit-keyframes flipOutX {
		0% {
			-webkit-transform: perspective(400px);
			transform: perspective(400px)
		}

		30% {
			-webkit-transform: perspective(400px) rotateX(-20deg);
			transform: perspective(400px) rotateX(-20deg);
			opacity: 1
		}

		to {
			-webkit-transform: perspective(400px) rotateX(90deg);
			transform: perspective(400px) rotateX(90deg);
			opacity: 0
		}
	}

	@keyframes flipOutX {
		0% {
			-webkit-transform: perspective(400px);
			transform: perspective(400px)
		}

		30% {
			-webkit-transform: perspective(400px) rotateX(-20deg);
			transform: perspective(400px) rotateX(-20deg);
			opacity: 1
		}

		to {
			-webkit-transform: perspective(400px) rotateX(90deg);
			transform: perspective(400px) rotateX(90deg);
			opacity: 0
		}
	}

	@-webkit-keyframes flipOutY {
		0% {
			-webkit-transform: perspective(400px);
			transform: perspective(400px)
		}

		30% {
			-webkit-transform: perspective(400px) rotateY(-15deg);
			transform: perspective(400px) rotateY(-15deg);
			opacity: 1
		}

		to {
			-webkit-transform: perspective(400px) rotateY(90deg);
			transform: perspective(400px) rotateY(90deg);
			opacity: 0
		}
	}

	@keyframes flipOutY {
		0% {
			-webkit-transform: perspective(400px);
			transform: perspective(400px)
		}

		30% {
			-webkit-transform: perspective(400px) rotateY(-15deg);
			transform: perspective(400px) rotateY(-15deg);
			opacity: 1
		}

		to {
			-webkit-transform: perspective(400px) rotateY(90deg);
			transform: perspective(400px) rotateY(90deg);
			opacity: 0
		}
	}

	@-webkit-keyframes lightSpeedIn {
		0% {
			-webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
			transform: translate3d(100%, 0, 0) skewX(-30deg);
			opacity: 0
		}

		60% {
			-webkit-transform: skewX(20deg);
			transform: skewX(20deg);
			opacity: 1
		}

		80% {
			-webkit-transform: skewX(-5deg);
			transform: skewX(-5deg);
			opacity: 1
		}

		to {
			-webkit-transform: none;
			transform: none;
			opacity: 1
		}
	}

	@keyframes lightSpeedIn {
		0% {
			-webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
			transform: translate3d(100%, 0, 0) skewX(-30deg);
			opacity: 0
		}

		60% {
			-webkit-transform: skewX(20deg);
			transform: skewX(20deg);
			opacity: 1
		}

		80% {
			-webkit-transform: skewX(-5deg);
			transform: skewX(-5deg);
			opacity: 1
		}

		to {
			-webkit-transform: none;
			transform: none;
			opacity: 1
		}
	}

	@-webkit-keyframes lightSpeedOut {
		0% {
			opacity: 1
		}

		to {
			-webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
			transform: translate3d(100%, 0, 0) skewX(30deg);
			opacity: 0
		}
	}

	@keyframes lightSpeedOut {
		0% {
			opacity: 1
		}

		to {
			-webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
			transform: translate3d(100%, 0, 0) skewX(30deg);
			opacity: 0
		}
	}

	@-webkit-keyframes rotateIn {
		0% {
			-webkit-transform-origin: center;
			transform-origin: center;
			-webkit-transform: rotate(-200deg);
			transform: rotate(-200deg);
			opacity: 0
		}

		to {
			-webkit-transform-origin: center;
			transform-origin: center;
			-webkit-transform: none;
			transform: none;
			opacity: 1
		}
	}

	@keyframes rotateIn {
		0% {
			-webkit-transform-origin: center;
			transform-origin: center;
			-webkit-transform: rotate(-200deg);
			transform: rotate(-200deg);
			opacity: 0
		}

		to {
			-webkit-transform-origin: center;
			transform-origin: center;
			-webkit-transform: none;
			transform: none;
			opacity: 1
		}
	}

	@-webkit-keyframes rotateInDownLeft {
		0% {
			-webkit-transform-origin: left bottom;
			transform-origin: left bottom;
			-webkit-transform: rotate(-45deg);
			transform: rotate(-45deg);
			opacity: 0
		}

		to {
			-webkit-transform-origin: left bottom;
			transform-origin: left bottom;
			-webkit-transform: none;
			transform: none;
			opacity: 1
		}
	}

	@keyframes rotateInDownLeft {
		0% {
			-webkit-transform-origin: left bottom;
			transform-origin: left bottom;
			-webkit-transform: rotate(-45deg);
			transform: rotate(-45deg);
			opacity: 0
		}

		to {
			-webkit-transform-origin: left bottom;
			transform-origin: left bottom;
			-webkit-transform: none;
			transform: none;
			opacity: 1
		}
	}

	@-webkit-keyframes rotateInDownRight {
		0% {
			-webkit-transform-origin: right bottom;
			transform-origin: right bottom;
			-webkit-transform: rotate(45deg);
			transform: rotate(45deg);
			opacity: 0
		}

		to {
			-webkit-transform-origin: right bottom;
			transform-origin: right bottom;
			-webkit-transform: none;
			transform: none;
			opacity: 1
		}
	}

	@keyframes rotateInDownRight {
		0% {
			-webkit-transform-origin: right bottom;
			transform-origin: right bottom;
			-webkit-transform: rotate(45deg);
			transform: rotate(45deg);
			opacity: 0
		}

		to {
			-webkit-transform-origin: right bottom;
			transform-origin: right bottom;
			-webkit-transform: none;
			transform: none;
			opacity: 1
		}
	}

	@-webkit-keyframes rotateInUpLeft {
		0% {
			-webkit-transform-origin: left bottom;
			transform-origin: left bottom;
			-webkit-transform: rotate(45deg);
			transform: rotate(45deg);
			opacity: 0
		}

		to {
			-webkit-transform-origin: left bottom;
			transform-origin: left bottom;
			-webkit-transform: none;
			transform: none;
			opacity: 1
		}
	}

	@keyframes rotateInUpLeft {
		0% {
			-webkit-transform-origin: left bottom;
			transform-origin: left bottom;
			-webkit-transform: rotate(45deg);
			transform: rotate(45deg);
			opacity: 0
		}

		to {
			-webkit-transform-origin: left bottom;
			transform-origin: left bottom;
			-webkit-transform: none;
			transform: none;
			opacity: 1
		}
	}

	@-webkit-keyframes rotateInUpRight {
		0% {
			-webkit-transform-origin: right bottom;
			transform-origin: right bottom;
			-webkit-transform: rotate(-90deg);
			transform: rotate(-90deg);
			opacity: 0
		}

		to {
			-webkit-transform-origin: right bottom;
			transform-origin: right bottom;
			-webkit-transform: none;
			transform: none;
			opacity: 1
		}
	}

	@keyframes rotateInUpRight {
		0% {
			-webkit-transform-origin: right bottom;
			transform-origin: right bottom;
			-webkit-transform: rotate(-90deg);
			transform: rotate(-90deg);
			opacity: 0
		}

		to {
			-webkit-transform-origin: right bottom;
			transform-origin: right bottom;
			-webkit-transform: none;
			transform: none;
			opacity: 1
		}
	}

	@-webkit-keyframes rotateOut {
		0% {
			-webkit-transform-origin: center;
			transform-origin: center;
			opacity: 1
		}

		to {
			-webkit-transform-origin: center;
			transform-origin: center;
			-webkit-transform: rotate(200deg);
			transform: rotate(200deg);
			opacity: 0
		}
	}

	@keyframes rotateOut {
		0% {
			-webkit-transform-origin: center;
			transform-origin: center;
			opacity: 1
		}

		to {
			-webkit-transform-origin: center;
			transform-origin: center;
			-webkit-transform: rotate(200deg);
			transform: rotate(200deg);
			opacity: 0
		}
	}

	@-webkit-keyframes rotateOutDownLeft {
		0% {
			-webkit-transform-origin: left bottom;
			transform-origin: left bottom;
			opacity: 1
		}

		to {
			-webkit-transform-origin: left bottom;
			transform-origin: left bottom;
			-webkit-transform: rotate(45deg);
			transform: rotate(45deg);
			opacity: 0
		}
	}

	@keyframes rotateOutDownLeft {
		0% {
			-webkit-transform-origin: left bottom;
			transform-origin: left bottom;
			opacity: 1
		}

		to {
			-webkit-transform-origin: left bottom;
			transform-origin: left bottom;
			-webkit-transform: rotate(45deg);
			transform: rotate(45deg);
			opacity: 0
		}
	}

	@-webkit-keyframes rotateOutDownRight {
		0% {
			-webkit-transform-origin: right bottom;
			transform-origin: right bottom;
			opacity: 1
		}

		to {
			-webkit-transform-origin: right bottom;
			transform-origin: right bottom;
			-webkit-transform: rotate(-45deg);
			transform: rotate(-45deg);
			opacity: 0
		}
	}

	@keyframes rotateOutDownRight {
		0% {
			-webkit-transform-origin: right bottom;
			transform-origin: right bottom;
			opacity: 1
		}

		to {
			-webkit-transform-origin: right bottom;
			transform-origin: right bottom;
			-webkit-transform: rotate(-45deg);
			transform: rotate(-45deg);
			opacity: 0
		}
	}

	@-webkit-keyframes rotateOutUpLeft {
		0% {
			-webkit-transform-origin: left bottom;
			transform-origin: left bottom;
			opacity: 1
		}

		to {
			-webkit-transform-origin: left bottom;
			transform-origin: left bottom;
			-webkit-transform: rotate(-45deg);
			transform: rotate(-45deg);
			opacity: 0
		}
	}

	@keyframes rotateOutUpLeft {
		0% {
			-webkit-transform-origin: left bottom;
			transform-origin: left bottom;
			opacity: 1
		}

		to {
			-webkit-transform-origin: left bottom;
			transform-origin: left bottom;
			-webkit-transform: rotate(-45deg);
			transform: rotate(-45deg);
			opacity: 0
		}
	}

	@-webkit-keyframes rotateOutUpRight {
		0% {
			-webkit-transform-origin: right bottom;
			transform-origin: right bottom;
			opacity: 1
		}

		to {
			-webkit-transform-origin: right bottom;
			transform-origin: right bottom;
			-webkit-transform: rotate(90deg);
			transform: rotate(90deg);
			opacity: 0
		}
	}

	@keyframes rotateOutUpRight {
		0% {
			-webkit-transform-origin: right bottom;
			transform-origin: right bottom;
			opacity: 1
		}

		to {
			-webkit-transform-origin: right bottom;
			transform-origin: right bottom;
			-webkit-transform: rotate(90deg);
			transform: rotate(90deg);
			opacity: 0
		}
	}

	@-webkit-keyframes hinge {
		0% {
			-webkit-transform-origin: top left;
			transform-origin: top left;
			-webkit-animation-timing-function: ease-in-out;
			animation-timing-function: ease-in-out
		}

		20%,
		60% {
			-webkit-transform: rotate(80deg);
			transform: rotate(80deg);
			-webkit-transform-origin: top left;
			transform-origin: top left;
			-webkit-animation-timing-function: ease-in-out;
			animation-timing-function: ease-in-out
		}

		40%,
		80% {
			-webkit-transform: rotate(60deg);
			transform: rotate(60deg);
			-webkit-transform-origin: top left;
			transform-origin: top left;
			-webkit-animation-timing-function: ease-in-out;
			animation-timing-function: ease-in-out;
			opacity: 1
		}

		to {
			-webkit-transform: translate3d(0, 700px, 0);
			transform: translate3d(0, 700px, 0);
			opacity: 0
		}
	}

	@keyframes hinge {
		0% {
			-webkit-transform-origin: top left;
			transform-origin: top left;
			-webkit-animation-timing-function: ease-in-out;
			animation-timing-function: ease-in-out
		}

		20%,
		60% {
			-webkit-transform: rotate(80deg);
			transform: rotate(80deg);
			-webkit-transform-origin: top left;
			transform-origin: top left;
			-webkit-animation-timing-function: ease-in-out;
			animation-timing-function: ease-in-out
		}

		40%,
		80% {
			-webkit-transform: rotate(60deg);
			transform: rotate(60deg);
			-webkit-transform-origin: top left;
			transform-origin: top left;
			-webkit-animation-timing-function: ease-in-out;
			animation-timing-function: ease-in-out;
			opacity: 1
		}

		to {
			-webkit-transform: translate3d(0, 700px, 0);
			transform: translate3d(0, 700px, 0);
			opacity: 0
		}
	}

	@-webkit-keyframes rollIn {
		0% {
			opacity: 0;
			-webkit-transform: translate3d(-100%, 0, 0) rotate(-120deg);
			transform: translate3d(-100%, 0, 0) rotate(-120deg)
		}

		to {
			opacity: 1;
			-webkit-transform: none;
			transform: none
		}
	}

	@keyframes rollIn {
		0% {
			opacity: 0;
			-webkit-transform: translate3d(-100%, 0, 0) rotate(-120deg);
			transform: translate3d(-100%, 0, 0) rotate(-120deg)
		}

		to {
			opacity: 1;
			-webkit-transform: none;
			transform: none
		}
	}

	@-webkit-keyframes rollOut {
		0% {
			opacity: 1
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(100%, 0, 0) rotate(120deg);
			transform: translate3d(100%, 0, 0) rotate(120deg)
		}
	}

	@keyframes rollOut {
		0% {
			opacity: 1
		}

		to {
			opacity: 0;
			-webkit-transform: translate3d(100%, 0, 0) rotate(120deg);
			transform: translate3d(100%, 0, 0) rotate(120deg)
		}
	}

	@-webkit-keyframes zoomIn {
		0% {
			opacity: 0;
			-webkit-transform: scale3d(.3, .3, .3);
			transform: scale3d(.3, .3, .3)
		}

		50% {
			opacity: 1
		}
	}

	@keyframes zoomIn {
		0% {
			opacity: 0;
			-webkit-transform: scale3d(.3, .3, .3);
			transform: scale3d(.3, .3, .3)
		}

		50% {
			opacity: 1
		}
	}

	@-webkit-keyframes zoomInDown {
		0% {
			opacity: 0;
			-webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
			transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
			-webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
			animation-timing-function: cubic-bezier(.55, .055, .675, .19)
		}

		60% {
			opacity: 1;
			-webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
			transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
			-webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
			animation-timing-function: cubic-bezier(.175, .885, .32, 1)
		}
	}

	@keyframes zoomInDown {
		0% {
			opacity: 0;
			-webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
			transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
			-webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
			animation-timing-function: cubic-bezier(.55, .055, .675, .19)
		}

		60% {
			opacity: 1;
			-webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
			transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
			-webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
			animation-timing-function: cubic-bezier(.175, .885, .32, 1)
		}
	}

	@-webkit-keyframes zoomInLeft {
		0% {
			opacity: 0;
			-webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
			transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
			-webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
			animation-timing-function: cubic-bezier(.55, .055, .675, .19)
		}

		60% {
			opacity: 1;
			-webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
			transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
			-webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
			animation-timing-function: cubic-bezier(.175, .885, .32, 1)
		}
	}

	@keyframes zoomInLeft {
		0% {
			opacity: 0;
			-webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
			transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
			-webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
			animation-timing-function: cubic-bezier(.55, .055, .675, .19)
		}

		60% {
			opacity: 1;
			-webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
			transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
			-webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
			animation-timing-function: cubic-bezier(.175, .885, .32, 1)
		}
	}

	@-webkit-keyframes zoomInRight {
		0% {
			opacity: 0;
			-webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
			transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
			-webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
			animation-timing-function: cubic-bezier(.55, .055, .675, .19)
		}

		60% {
			opacity: 1;
			-webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
			transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
			-webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
			animation-timing-function: cubic-bezier(.175, .885, .32, 1)
		}
	}

	@keyframes zoomInRight {
		0% {
			opacity: 0;
			-webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
			transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
			-webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
			animation-timing-function: cubic-bezier(.55, .055, .675, .19)
		}

		60% {
			opacity: 1;
			-webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
			transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
			-webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
			animation-timing-function: cubic-bezier(.175, .885, .32, 1)
		}
	}

	@-webkit-keyframes zoomInUp {
		0% {
			opacity: 0;
			-webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
			transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
			-webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
			animation-timing-function: cubic-bezier(.55, .055, .675, .19)
		}

		60% {
			opacity: 1;
			-webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
			transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
			-webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
			animation-timing-function: cubic-bezier(.175, .885, .32, 1)
		}
	}

	@keyframes zoomInUp {
		0% {
			opacity: 0;
			-webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
			transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
			-webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
			animation-timing-function: cubic-bezier(.55, .055, .675, .19)
		}

		60% {
			opacity: 1;
			-webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
			transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
			-webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
			animation-timing-function: cubic-bezier(.175, .885, .32, 1)
		}
	}

	@-webkit-keyframes zoomOut {
		0% {
			opacity: 1
		}

		50% {
			opacity: 0;
			-webkit-transform: scale3d(.3, .3, .3);
			transform: scale3d(.3, .3, .3)
		}

		to {
			opacity: 0
		}
	}

	@keyframes zoomOut {
		0% {
			opacity: 1
		}

		50% {
			opacity: 0;
			-webkit-transform: scale3d(.3, .3, .3);
			transform: scale3d(.3, .3, .3)
		}

		to {
			opacity: 0
		}
	}

	@-webkit-keyframes zoomOutDown {
		40% {
			opacity: 1;
			-webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
			transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
			-webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
			animation-timing-function: cubic-bezier(.55, .055, .675, .19)
		}

		to {
			opacity: 0;
			-webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
			transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
			-webkit-transform-origin: center bottom;
			transform-origin: center bottom;
			-webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
			animation-timing-function: cubic-bezier(.175, .885, .32, 1)
		}
	}

	@keyframes zoomOutDown {
		40% {
			opacity: 1;
			-webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
			transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
			-webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
			animation-timing-function: cubic-bezier(.55, .055, .675, .19)
		}

		to {
			opacity: 0;
			-webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
			transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
			-webkit-transform-origin: center bottom;
			transform-origin: center bottom;
			-webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
			animation-timing-function: cubic-bezier(.175, .885, .32, 1)
		}
	}

	@-webkit-keyframes zoomOutLeft {
		40% {
			opacity: 1;
			-webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
			transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0)
		}

		to {
			opacity: 0;
			-webkit-transform: scale(.1) translate3d(-2000px, 0, 0);
			transform: scale(.1) translate3d(-2000px, 0, 0);
			-webkit-transform-origin: left center;
			transform-origin: left center
		}
	}

	@keyframes zoomOutLeft {
		40% {
			opacity: 1;
			-webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
			transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0)
		}

		to {
			opacity: 0;
			-webkit-transform: scale(.1) translate3d(-2000px, 0, 0);
			transform: scale(.1) translate3d(-2000px, 0, 0);
			-webkit-transform-origin: left center;
			transform-origin: left center
		}
	}

	@-webkit-keyframes zoomOutRight {
		40% {
			opacity: 1;
			-webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
			transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0)
		}

		to {
			opacity: 0;
			-webkit-transform: scale(.1) translate3d(2000px, 0, 0);
			transform: scale(.1) translate3d(2000px, 0, 0);
			-webkit-transform-origin: right center;
			transform-origin: right center
		}
	}

	@keyframes zoomOutRight {
		40% {
			opacity: 1;
			-webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
			transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0)
		}

		to {
			opacity: 0;
			-webkit-transform: scale(.1) translate3d(2000px, 0, 0);
			transform: scale(.1) translate3d(2000px, 0, 0);
			-webkit-transform-origin: right center;
			transform-origin: right center
		}
	}

	@-webkit-keyframes zoomOutUp {
		40% {
			opacity: 1;
			-webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
			transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
			-webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
			animation-timing-function: cubic-bezier(.55, .055, .675, .19)
		}

		to {
			opacity: 0;
			-webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
			transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
			-webkit-transform-origin: center bottom;
			transform-origin: center bottom;
			-webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
			animation-timing-function: cubic-bezier(.175, .885, .32, 1)
		}
	}

	@keyframes zoomOutUp {
		40% {
			opacity: 1;
			-webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
			transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
			-webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
			animation-timing-function: cubic-bezier(.55, .055, .675, .19)
		}

		to {
			opacity: 0;
			-webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
			transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
			-webkit-transform-origin: center bottom;
			transform-origin: center bottom;
			-webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
			animation-timing-function: cubic-bezier(.175, .885, .32, 1)
		}
	}

	@-webkit-keyframes slideInDown {
		0% {
			-webkit-transform: translate3d(0, -100%, 0);
			transform: translate3d(0, -100%, 0);
			visibility: visible
		}

		to {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}
	}

	@keyframes slideInDown {
		0% {
			-webkit-transform: translate3d(0, -100%, 0);
			transform: translate3d(0, -100%, 0);
			visibility: visible
		}

		to {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}
	}

	@-webkit-keyframes slideInLeft {
		0% {
			-webkit-transform: translate3d(-100%, 0, 0);
			transform: translate3d(-100%, 0, 0);
			visibility: visible
		}

		to {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}
	}

	@keyframes slideInLeft {
		0% {
			-webkit-transform: translate3d(-100%, 0, 0);
			transform: translate3d(-100%, 0, 0);
			visibility: visible
		}

		to {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}
	}

	@-webkit-keyframes slideInRight {
		0% {
			-webkit-transform: translate3d(100%, 0, 0);
			transform: translate3d(100%, 0, 0);
			visibility: visible
		}

		to {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}
	}

	@keyframes slideInRight {
		0% {
			-webkit-transform: translate3d(100%, 0, 0);
			transform: translate3d(100%, 0, 0);
			visibility: visible
		}

		to {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}
	}

	@-webkit-keyframes slideInUp {
		0% {
			-webkit-transform: translate3d(0, 100%, 0);
			transform: translate3d(0, 100%, 0);
			visibility: visible
		}

		to {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}
	}

	@keyframes slideInUp {
		0% {
			-webkit-transform: translate3d(0, 100%, 0);
			transform: translate3d(0, 100%, 0);
			visibility: visible
		}

		to {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}
	}

	@-webkit-keyframes slideOutDown {
		0% {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}

		to {
			visibility: hidden;
			-webkit-transform: translate3d(0, 100%, 0);
			transform: translate3d(0, 100%, 0)
		}
	}

	@keyframes slideOutDown {
		0% {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}

		to {
			visibility: hidden;
			-webkit-transform: translate3d(0, 100%, 0);
			transform: translate3d(0, 100%, 0)
		}
	}

	@-webkit-keyframes slideOutLeft {
		0% {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}

		to {
			visibility: hidden;
			-webkit-transform: translate3d(-100%, 0, 0);
			transform: translate3d(-100%, 0, 0)
		}
	}

	@keyframes slideOutLeft {
		0% {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}

		to {
			visibility: hidden;
			-webkit-transform: translate3d(-100%, 0, 0);
			transform: translate3d(-100%, 0, 0)
		}
	}

	@-webkit-keyframes slideOutRight {
		0% {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}

		to {
			visibility: hidden;
			-webkit-transform: translate3d(100%, 0, 0);
			transform: translate3d(100%, 0, 0)
		}
	}

	@keyframes slideOutRight {
		0% {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}

		to {
			visibility: hidden;
			-webkit-transform: translate3d(100%, 0, 0);
			transform: translate3d(100%, 0, 0)
		}
	}

	@-webkit-keyframes slideOutUp {
		0% {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}

		to {
			visibility: hidden;
			-webkit-transform: translate3d(0, -100%, 0);
			transform: translate3d(0, -100%, 0)
		}
	}

	@keyframes slideOutUp {
		0% {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}

		to {
			visibility: hidden;
			-webkit-transform: translate3d(0, -100%, 0);
			transform: translate3d(0, -100%, 0)
		}
	}

	.btn {
		text-transform: uppercase
	}

	.btn-green.active,
	.btn-green.focus,
	.btn-green:active,
	.btn-green:focus,
	.btn-green:hover,
	.btn-primary.active,
	.btn-primary.focus,
	.btn-primary:active,
	.btn-primary:focus,
	.btn-primary:hover,
	.btn-success.active,
	.btn-success.focus,
	.btn-success:active,
	.btn-success:focus,
	.btn-success:hover,
	.containerx a.btn-primary.active,
	.containerx a.btn-primary.focus,
	.containerx a.btn-primary:active,
	.containerx a.btn-primary:focus,
	.containerx a.btn-primary:hover,
	.open>.btn-green.dropdown-toggle,
	.open>.btn-primary.dropdown-toggle,
	.open>.btn-success.dropdown-toggle,
	.open>.containerx a.btn-primary.dropdown-toggle,
	.open>a.btn-primary:visited.dropdown-toggle,
	a.btn-primary:visited.active,
	a.btn-primary:visited.focus,
	a.btn-primary:visited:active,
	a.btn-primary:visited:focus,
	a.btn-primary:visited:hover {
		color: #fff;
		background-color: #3b6d09;
		border-color: #3b6d09;
		-webkit-transition: all .5s ease;
		-o-transition: all .5s ease;
		transition: all .5s ease
	}

	.btn-green.active,
	.btn-green:active,
	.btn-primary.active,
	.btn-primary:active,
	.btn-success.active,
	.btn-success:active,
	.containerx a.btn-primary.active,
	.containerx a.btn-primary:active,
	.open>.btn-green.dropdown-toggle,
	.open>.btn-primary.dropdown-toggle,
	.open>.btn-success.dropdown-toggle,
	.open>.containerx a.btn-primary.dropdown-toggle,
	.open>a.btn-primary:visited.dropdown-toggle,
	a.btn-primary:visited.active,
	a.btn-primary:visited:active {
		background-image: none
	}

	.btn-green:focus,
	.btn-primary:focus,
	.btn-success:focus,
	.containerx a.btn-primary:focus,
	a.btn-primary:visited:focus {
		outline: thin dotted !important;
		outline-offset: -2px
	}

	.btn-link {
		cursor: pointer
	}

	.btn-link:hover:after {
		text-decoration: none
	}

	.fine-print {
		font-size: 11px
	}

	.server-name {
		bottom: 0;
		color: #f5f5f5 !important;
		margin-top: -20px;
		padding: 0 0 10px;
		position: absolute;
		width: 100%
	}

	.containerx .form-control {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		padding-left: 10px !important
	}

	.containerx .form-control {
		font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif
	}

	.contentMain a,
	.contentMain a:active,
	.contentMain a:focus,
	.contentMain a:hover {
		text-decoration: underline
	}

	[class^=icon-] {
		display: inline-block;
		fill: #01426a
	}

	[class*=" icon-"]:hover,
	[class^=icon-]:hover {
		fill: #2774ae
	}

	table {
		border-bottom: 1px solid #ddd
	}

	@media (max-width:665px) {
		body {
			margin-top: 55px
		}
	}

	body {
		position: relative;
		height: 100%
	}

	a:focus,
	a:hover {
		text-decoration: underline
	}

	a:focus,
	input[type=button]:focus,
	input[type=image]:focus,
	input[type=submit]:focus {
		outline: thin dotted;
		outline: 5px auto -webkit-focus-ring-color;
		outline-offset: -2px
	}

	@-webkit-keyframes rightSideDrawerBackground {
		0% {
			opacity: 0
		}

		to {
			opacity: .4
		}
	}

	@keyframes rightSideDrawerBackground {
		0% {
			opacity: 0
		}

		to {
			opacity: .4
		}
	}

	@-webkit-keyframes rightSideDrawer {
		0% {
			-webkit-transform: translateX(800px);
			transform: translateX(800px)
		}

		to {
			-webkit-transform: translateX(0);
			transform: translateX(0)
		}
	}

	@keyframes rightSideDrawer {
		0% {
			-webkit-transform: translateX(800px);
			transform: translateX(800px)
		}

		to {
			-webkit-transform: translateX(0);
			transform: translateX(0)
		}
	}

	@-webkit-keyframes closeRightSideDrawer {
		0% {
			-webkit-transform: translateX(0);
			transform: translateX(0)
		}

		to {
			-webkit-transform: translateX(800px);
			transform: translateX(800px)
		}
	}

	@keyframes closeRightSideDrawer {
		0% {
			-webkit-transform: translateX(0);
			transform: translateX(0)
		}

		to {
			-webkit-transform: translateX(800px);
			transform: translateX(800px)
		}
	}

	@-webkit-keyframes fadeSpinner {
		0% {
			opacity: 1
		}

		to {
			opacity: .3
		}
	}

	@keyframes fadeSpinner {
		0% {
			opacity: 1
		}

		to {
			opacity: .3
		}
	}

	#content h1,
	#content h2 {
		margin-top: 0
	}

	.secondary {
		font-weight: 400 !important
	}

	html .btn {
		border: 2px solid;
		border-radius: 0;
		text-decoration: none;
		font-size: 14px;
		font-weight: 700
	}

	html .btn:active,
	html .btn:focus,
	html .btn:hover {
		text-decoration: none
	}

	@media (max-width:767px) {
		html .btn {
			margin-bottom: 12px
		}
	}

	html .btn {
		padding: 8px 40px
	}

	html .btn-link:focus,
	html .btn-link:hover {
		color: #01426a
	}

	html .containerx .btn-primary {
		color: #fff;
		background-color: #48850b;
		border-color: #48850b;
		-webkit-box-shadow: 0 0 3px 0 rgba(0, 0, 0, .35);
		box-shadow: 0 0 3px 0 rgba(0, 0, 0, .35)
	}

	.open>html .btn-green.dropdown-toggle,
	.open>html .btn-primary.dropdown-toggle,
	.open>html .btn-success.dropdown-toggle,
	.open>html .containerx .btn-primary.dropdown-toggle,
	.open>html .containerx a.btn-primary.dropdown-toggle,
	html .btn-green.active,
	html .btn-green.focus,
	html .btn-green:active,
	html .btn-green:focus,
	html .btn-green:hover,
	html .btn-primary.active,
	html .btn-primary.focus,
	html .btn-primary:active,
	html .btn-primary:focus,
	html .btn-primary:hover,
	html .btn-success.active,
	html .btn-success.focus,
	html .btn-success:active,
	html .btn-success:focus,
	html .btn-success:hover,
	html .containerx .btn-primary.active,
	html .containerx .btn-primary.focus,
	html .containerx .btn-primary:active,
	html .containerx .btn-primary:focus,
	html .containerx .btn-primary:hover,
	html .containerx a.btn-primary.active,
	html .containerx a.btn-primary.focus,
	html .containerx a.btn-primary:active,
	html .containerx a.btn-primary:focus,
	html .containerx a.btn-primary:hover {
		color: #fff;
		background-color: #3b6d09;
		border-color: #3b6d09;
		-webkit-transition: all .5s ease;
		-o-transition: all .5s ease;
		transition: all .5s ease
	}

	.open>html .btn-green.dropdown-toggle,
	.open>html .btn-primary.dropdown-toggle,
	.open>html .btn-success.dropdown-toggle,
	.open>html .containerx .btn-primary.dropdown-toggle,
	.open>html .containerx a.btn-primary.dropdown-toggle,
	html .btn-green.active,
	html .btn-green:active,
	html .btn-primary.active,
	html .btn-primary:active,
	html .btn-success.active,
	html .btn-success:active,
	html .containerx .btn-primary.active,
	html .containerx .btn-primary:active,
	html .containerx a.btn-primary.active,
	html .containerx a.btn-primary:active {
		background-image: none
	}

	html .form-control {
		border-radius: 0 !important
	}

	html .form-control:focus {
		border: 2px solid #01426a;
		font-weight: 700;
		outline: 0;
		-webkit-box-shadow: none;
		box-shadow: none
	}

	html .form-control option {
		color: #01426a
	}

	html .containerx .form-control {
		color: #3c3b3f;
		font-size: 14px
	}

	html body {
		color: #3c3b3f
	}

	html body .containerx a {
		color: #2774ae
	}

	html body .containerx a:focus,
	html body .containerx a:hover,
	html body .containerx h1 {
		color: #01426a
	}

	html body .containerx h2 {
		color: #212223
	}

	html body .containerx label {
		color: #3c3b3f
	}

	html a {
		color: #2774ae
	}

	html a:focus,
	html a:hover {
		color: #01426a
	}

	html caption {
		color: #3c3b3f
	}

	html .vertical-align-with-input {
		padding-top: 3px
	}

	html .fine-print {
		color: #656565
	}

	html table.default tr.even,
	html table.default tr:nth-child(2n) {
		background: #f5f5f5
	}

	html .containerx table.default {
		border-color: #c8c9c7;
		color: #3c3b3f;
		background: #fff
	}

	html .containerx table.default td {
		border-color: #c8c9c7
	}

	html .containerx table.default th {
		border-color: #c8c9c7;
		color: #3c3b3f;
		background: #eee;
		font-size: 14px
	}

	html .containerx table.default tr.even,
	html .containerx table.default tr:nth-child(2n) {
		background: #f5f5f5
	}

	html #FormUserControl #_links {
		clear: both
	}

	html #FormUserControl #_links .myAccountHeading {
		color: #212223
	}

	html #FormUserControl #_links .sideNav,
	html #FormUserControl #_links .sideNavLink {
		color: #2774ae
	}

	html #FormUserControl #_links .sideNav:active,
	html #FormUserControl #_links .sideNav:hover,
	html #FormUserControl #_links .sideNavLink:active,
	html #FormUserControl #_links .sideNavLink:hover {
		color: #01426a
	}

	html .my-account-small-links a {
		font-size: 12px
	}

	.containerx {
		margin: 0 auto;
		max-width: 980px;
		padding: 0;
		border: 0;
		font-weight: inherit;
		font-style: inherit;
		vertical-align: baseline;
		font-size: 14px;
		color: #3c3b3f;
		line-height: 134%;
		font-family: Circular, "Helvetica Neue", Helvetica, Arial, sans-serif
	}

	.hidden {
		display: block !important
	}

	#content {
		outline: 0
	}

	.containerx {
		outline: 0
	}

	.containerx.clearfix {
		background-color: #fff
	}

	.containerx * {
		box-sizing: content-box
	}

	.containerx div,
	.containerx span,
	.containerx h1,
	.containerx h2,
	.containerx a,
	.containerx form,
	.containerx label,
	.containerx table,
	.containerx caption,
	.containerx tbody,
	.containerx tr,
	.containerx th,
	.containerx td {
		margin: 0;
		padding: 0;
		border: 0;
		font-weight: inherit;
		font-style: inherit;
		font-size: 100%;
		font-family: inherit;
		vertical-align: baseline
	}

	.containerx table {
		border-collapse: separate;
		border-spacing: 0
	}

	.containerx caption,
	.containerx td {
		text-align: left;
		font-weight: normal
	}

	.containerx table,
	.containerx td {
		vertical-align: top
	}

	.containerx h1,
	.containerx h2 {
		font-weight: normal;
		font-family: Circular, Arial, Helvetica, sans-serif;
		margin-bottom: .83em
	}

	.containerx h1 {
		font: bold 2em Circular, Arial, Helvetica, sans-serif;
		clear: left
	}

	.containerx h2 {
		font-size: 1.5em;
		font-weight: bold
	}

	.containerx input[type='submit']:focus,
	.containerx input[type='button']:focus,
	.containerx input[type='image']:focus {
		outline: thin dotted;
		outline-offset: -2px
	}

	.containerx .smallText {
		font-size: .92em
	}

	.containerx strong {
		font-weight: bold
	}

	.containerx th {
		font-weight: bold
	}

	.containerx td,
	.containerx caption {
		padding: 0
	}

	.containerx caption {
		background: #eee
	}

	.containerx table.default td {
		border: 1px solid #bcc896;
		line-height: 1.4em;
		padding: 7px !important;
		text-align: left !important
	}

	.containerx table.default th {
		border: 1px solid #bcc896;
		text-align: left !important;
		padding: 7px !important;
		margin: 20px 0 0;
		vertical-align: middle
	}

	.containerx table.default tr:nth-child(even) {
		background: #f1f6e2
	}

	.containerx .left {
		float: left
	}

	.containerx div.span-3 {
		float: left;
		margin-right: 20px
	}

	.containerx .span-3 {
		width: 214px
	}

	.containerx .append-bottom {
		margin-bottom: 1.5em
	}

	.containerx .hidden {
		position: absolute;
		left: -3000px;
		top: -500px;
		width: 1px;
		height: 1px;
		overflow: hidden;
		visibility: visible !important;
		display: block !important
	}

	.containerx .clearfix:after,
	.containerx .content:after {
		content: "";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
		overflow: hidden
	}

	.containerx .clearfix {
		display: block
	}

	.containerx .clear {
		clear: both
	}

	.containerx label {
		font-weight: bold;
		cursor: pointer
	}

	.containerx select {
		font-weight: normal
	}

	.containerx .contentMain {
		max-width: 974px;
		clear: both
	}

	.containerx .contentWrapNoSubNav {
		border: 0;
		clear: both;
		border-radius: 0 0 5px 5px;
		background: white;
		max-width: 980px
	}

	.containerx .infoContentPad {
		padding: 20px 0 40px 30px
	}

	.containerx .pageHeight {
		min-height: 400px
	}

	.containerx .infoContentHeader {
		margin: 30px 0 40px 0;
		clear: both
	}

	.containerx .infoContentHeader h1 {
		margin: 0
	}

	.containerx .sideNav {
		width: 204px;
		margin-bottom: 7px;
		border-bottom: 1px solid #dcdcdc;
		padding-bottom: 4px;
		font-weight: bold
	}

	.containerx .infoContentMain {
		float: left
	}

	.containerx .vertical-align-with-input {
		line-height: 34px;
		margin-right: 5px
	}

	.containerx .rightaligned {
		text-align: right !important
	}

	.containerx .clearfix:after {
		clear: both
	}

	.containerx .clearfix:before,
	.containerx .clearfix:after {
		content: " ";
		display: table
	}
</style>
<!--[if lt IE 10]><link rel="Stylesheet" type="text/css" href="//www.alaskaair.com/stylesheets/ie8-9.css?202203021524" /><![endif]--><!--[if lt IE 9]><link rel="Stylesheet" type="text/css" href="//www.alaskaair.com/stylesheets/ie8.css?202203021524" /><![endif]-->
<title>My Account - Alaska Airlines</title>
<meta http-equiv=Expires content=0>
<meta http-equiv=Cache-Control content=no-cache>
<meta http-equiv=Pragma content=no-cache>
<meta http-equiv=Cache-Control content=no-store>
<style>
	<!--.containerx .greyDivider{width:675px;border-bottom:1px solid #dcdcdc;margin-top:10px;margin-bottom:20px}.containerx .sideNavLink{width:204px;margin-bottom:7px;border-bottom:1px solid #dcdcdc;padding-bottom:4px;font-weight:normal;text-decoration:none;cursor:pointer}.containerx .sideNavLink:hover{text-decoration:underline}.containerx .myAccountHeading{font-weight:bold;font-family:Arial,Helvetica,sans-serif;margin-bottom:12px;margin-top:12px;white-space:normal;line-height:16px}.containerx #FormUserControl__tabMenun0 .myAccountHeading{margin-top:0}
	-->
	#optanon {
		font-family: Arial, sans-serif;
		background: 0;
		border: 0;
		bottom: auto;
		clear: none;
		float: none;
		height: auto;
		left: auto;
		letter-spacing: normal;
		line-height: normal;
		max-height: none;
		max-width: none;
		min-height: 0;
		min-width: 0;
		overflow: visible;
		right: auto;
		text-align: left;
		text-decoration: none;
		text-indent: 0;
		text-transform: none;
		text-shadow: none;
		top: auto;
		visibility: visible;
		white-space: normal;
		width: auto;
		z-index: auto;
		padding: 0;
		margin: 0;
		border-radius: 0;
		position: static;
		font-weight: normal
	}

	@keyframes
	fade-in {
		0% {
			opacity: 0
		}

		100% {
			opacity: 1
		}
	}

	.optanon-alert-box-wrapper {
		position: fixed;
		width: 100%;
		border: 0;
		bottom: -145px;
		z-index: 2147483644;
		min-height: 50px
	}

	.optanon-alert-box-wrapper {
		background-color: #00274A !important
	}

	@-webkit-keyframes
	st-ui-fade-in {
		0% {
			opacity: 0;
			-webkit-transform: scale(0.9);
			transform: scale(0.9)
		}

		100% {
			opacity: 1;
			-webkit-transform: scale(1);
			transform: scale(1)
		}
	}

	@-moz-keyframes
	st-ui-fade-in {
		0% {
			opacity: 0;
			-moz-transform: scale(0.9);
			transform: scale(0.9)
		}

		100% {
			opacity: 1;
			-moz-transform: scale(1);
			transform: scale(1)
		}
	}

	@keyframes
	st-ui-fade-in {
		0% {
			opacity: 0;
			-webkit-transform: scale(0.9);
			-moz-transform: scale(0.9);
			transform: scale(0.9)
		}

		100% {
			opacity: 1;
			-webkit-transform: scale(1);
			-moz-transform: scale(1);
			transform: scale(1)
		}
	}

	@-webkit-keyframes
	st-ui-fade-out {
		0% {
			opacity: 1;
			-webkit-transform: scale(1);
			transform: scale(1)
		}

		100% {
			opacity: 0;
			-webkit-transform: scale(0.9);
			transform: scale(0.9)
		}
	}

	@-moz-keyframes
	st-ui-fade-out {
		0% {
			opacity: 1;
			-moz-transform: scale(1);
			transform: scale(1)
		}

		100% {
			opacity: 0;
			-moz-transform: scale(0.9);
			transform: scale(0.9)
		}
	}

	@keyframes
	st-ui-fade-out {
		0% {
			opacity: 1;
			-webkit-transform: scale(1);
			-moz-transform: scale(1);
			transform: scale(1)
		}

		100% {
			opacity: 0;
			-webkit-transform: scale(0.9);
			-moz-transform: scale(0.9);
			transform: scale(0.9)
		}
	}

	@-webkit-keyframes
	st-ui-slide-in {
		0% {
			-webkit-transform: translate(-110%, 0);
			transform: translate(-110%, 0)
		}

		100% {
			-webkit-transform: translate(0, 0);
			transform: translate(0, 0)
		}
	}

	@-moz-keyframes
	st-ui-slide-in {
		0% {
			-moz-transform: translate(-110%, 0);
			transform: translate(-110%, 0)
		}

		100% {
			-moz-transform: translate(0, 0);
			transform: translate(0, 0)
		}
	}

	@keyframes
	st-ui-slide-in {
		0% {
			-webkit-transform: translate(-110%, 0);
			-moz-transform: translate(-110%, 0);
			transform: translate(-110%, 0)
		}

		100% {
			-webkit-transform: translate(0, 0);
			-moz-transform: translate(0, 0);
			transform: translate(0, 0)
		}
	}

	@-webkit-keyframes
	st-ui-slide-out {
		0% {
			-webkit-transform: translate(0, 0);
			transform: translate(0, 0)
		}

		100% {
			-webkit-transform: translate(-110%, 0);
			transform: translate(-110%, 0)
		}
	}

	@-moz-keyframes
	st-ui-slide-out {
		0% {
			-moz-transform: translate(0, 0);
			transform: translate(0, 0)
		}

		100% {
			-moz-transform: translate(-110%, 0);
			transform: translate(-110%, 0)
		}
	}

	@keyframes
	st-ui-slide-out {
		0% {
			-webkit-transform: translate(0, 0);
			-moz-transform: translate(0, 0);
			transform: translate(0, 0)
		}

		100% {
			-webkit-transform: translate(-110%, 0);
			-moz-transform: translate(-110%, 0);
			transform: translate(-110%, 0)
		}
	}

	.st-default-search-input {
		font-weight: 400;
		line-height: 16px;
		-webkit-box-sizing: content-box;
		-moz-box-sizing: content-box;
		background: #fff
	8px
	8px
	no-repeat
	url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6%2BR8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAG11AABzoAAA%2FN0AAINkAABw6AAA7GgAADA%2BAAAQkOTsmeoAAAESSURBVHjajNCxS9VRGMbxz71E4OwgoXPQxVEpXCI47%2BZqGP0LCoJO7UVD3QZzb3SwcHB7F3Uw3Zpd%2FAPCcJKG7Dj4u%2FK7Pwp94HDg5Xyf5z1Pr9YKImKANTzFXxzjU2ae6qhXaxURr%2FAFl9hHDy%2FwEK8z89sYVEp5gh84wMvMvGiSJ%2FEV85jNzLMR1McqfmN5BEBmnmMJFSvtpH7jdJiZv7q7Z%2BZPfMdcF6rN%2FT%2F1m2LGBkd4HhFT3dcRMY2FpskxaLNpayciHrWAGeziD7b%2BVfkithuTk8bkGa4wgWFmbrSTZOYeBvjc%2BucQj%2FEe6xHx4Taq1nrnKaW8K6XUUsrHWuvNevdRRLzFGwzvDbXAB9cDAHvhedDruuxSAAAAAElFTkSuQmCC);
	-moz-background-clip:padding-box;
	background-clip:padding-box;
	-webkit-border-radius:5px;
	-moz-border-radius:5px;
	-webkit-box-shadow:none;
	-moz-box-shadow:none;
	box-shadow:none
	}

	.st-default-search-input:focus,
	.st-ui-search-input:focus {
		outline: 0;
		border-color: #3b454f;
		border-color: rgba(0, 0, 0, 0.5)
	}

	@media
	only
	screen
	and
	(min-device-pixel-ratio:1.5),
	only
	screen
	and
	(-webkit-min-device-pixel-ratio:1.5),
	only
	screen
	and
	(min-resolution:1.5dppx) {
		.st-default-search-input {
			-moz-background-size: 13px
	13px;
	background-size:13px
	13px;
	background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAG11AABzoAAA%2FN0AAINkAABw6AAA7GgAADA%2BAAAQkOTsmeoAAAIKSURBVHjatNbPi81RGMfx1x0zio3yKzOLiSLyK1OzYEpSczYUycbCQk3DJAsxZGejWSGh%2FFr5AyxQlJOkCZPFSGlKxmzMj0SymBoLZmzOrdPN%2Fd57p%2FFZnc%2Fz7fT%2BPs85z%2FP9lrq7u1XRahxEJ1rxC1MYxmP8gBijetRcBXARvWipsm8GNzGAn%2FWAmir8LrzHyQIILME5DIcQtjUK2osXWJPFXuIMDqQynseb7Pk6DIYQttQCldIZrcKHVDaYxNEE%2Fpf24T5WJj%2BKjhjjdK2MLmWQcewsgMATdOFb8utxoVbpluNYFuvBlzrK%2FimdZVl9IYSWItB%2BLE5%2BCM%2FUrwcYSesV2F0E2p75hxrTHB5lvrMI1Jb5zxrXaLZuLQL9zvyieYDypp8tAk1mftM8QBuz9UQRaDjzh1FqMJtDmX9dBHqKcqNtxZEGQD1Ym2Xztgg0jRtZ7BZ21AHpwtXMX4sxztaaDAP4mNbLMJjetqlKuU7hOZam2Fdcr2fWlcfIUGq8ssZSn4yls9uQBmx7RS%2BVcBd9Mca5WiDYnLq93ts3VdE7VWGVpRlBB%2FrxvQAwnuZcO65k8eO4HUIo1cooVwv2pLHSlj7lE3iHV%2FhT%2FpSHEC7jbLb3Hk7kmRWB6lL5n6EWrMkCKcbYX1HGXtwpl3HBQLVgCwoqgi04qApsptl%2FUoyxP4RQvr2n%2Fw4AIvqLpmbxnMcAAAAASUVORK5CYII%3D)
	}
	}
</style>
<link rel="shortcut icon"
	href=data:image/x-icon;base64,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D//KvKb/+vn3//v6+f98WSD/akIB/2pCAf9qQgH/akIB/2pCAf9qQgH/akIB/wAAAAAAAAAAAAAAAAAAAAAnPTBUfNOw/4qcYP9qQgH/akIB/2pCAf9qQgH/akIB/2pCAf+BYCn//Pz7/7+uk/9qQgH/bUYH/3RPEv91UBX/noRa//7+/v///////v7+//Dt5v/p5Nv/g2Is/2pCAf9qQgH/akIB/2pCAf9qQgH/AAAAAAAAAAAAAAAAAAAAAFKKc6qSxZD/knEi/2pCAf9qQgH/akIB/2pCAf9qQgH/akIB/4NhK//Wy7r/j3JB/3FLDf/RxbH/3NPE/9vRwf/f18n/6+Xc//Lv6v/l3tP/yruk///////y7+r/eVUb/2pCAf9qQgH/akIB/2pCAf8AAAAAAAAAAAAAAAAFCAYOd7+b8LWlT/9ySwf/akIB/2pCAf9qQgH/akIB/2pCAf9qQgH/fFkg/8/Crf+dg1n/b0kK/2tDA/+ZflH/xLSa/9HEsP/Zzr7/y72m/6OLY//EtJr///////7+/v+LbTr/akIB/2pCAf9qQgH/akIB/wAAAAAAAAAAAAAAAAgODBKUw4z/mngm/2pCAf9qQgH/akIB/2pCAf9qQgH/akIB/2pCAf95Vhv/1sy6/7KdfP+ljWX/akIB/3ZSFv/Pw67//Pz7//7+/v/9/fz/tqOD/9PHtP///////f38/4VkL/9qQgH/akIB/2pCAf9qQgH/AAAAAAAAAAAAAAAAITQpSKO7d/91Twn/akIB/21FBf9rQwL/akIB/2pCAf9qQgH/hWQv/4hoNP/7+/n/0MSv/2xEBP9qQgH/akIB/2pCAf95VRv/jnA//7ekhf/k3dL////////////9/fz/hWUw/2pCAf9qQgH/akIB/2pCAf8AAAAAAAAAAAAAAAArSj5anJ9Y/2pDAf9qQgH/knBA/3NMD/9qQgH/akIB/2pCAf+ji2P/6+bd//7+/v//////k3ZH/6WNZv+PcD//hmUx/7Sgf/+hiWD/+vn4//////////////////////+Xe03/akIB/2pCAf9qQgH/akIB/wAAAAAAAAAAAAAAAEZuV5KZij7/akIB/2pCAf+iglr/c0wP/2pCAf9qQgH/akIB/49xQP/////////////////f1sj/+Pf0//////////////////b08P///////////////////////////9vRwv9tRgf/akIB/2pCAf9qQgH/AAAAAAAAAAAAAAAAVYBkoqOEL/9qQgH/akIB/7SXd/9zTA//akIB/2pCAf9qQgH/cUsN/+3o4f/6+Pb/18y7/82/qv/39fL/////////////////9/Xy/9jOvf/n4df//v79//f18v/q5Nv/7+rk/5V5S/9qQgH/akIB/2pCAf8AAAAAAAAAAAAAAABjdk6itJY7/2tDAf9vSAr/v6SI/3VPE/9qQgH/akIB/2pCAf9qQgH/flsj/35cJP+vmXf/0cSw/+fh1//////////////////e1sj/zL+p/97Vx//d1MX/mn9T/4dnM/+eg1n/cEoM/2pCAf9qQgH/akIB/wAAAAAAAAAAAAAAAGt0RaLEqEf/fFYP/3VPE//ApYn/elQb/2pCAf9qQgH/akIB/2pCAf9qQgH/b0gK/49xQP93Uxj/gV8o/6yWc//9/Pz/sp58/3FLDf9tRgf/b0gJ/6iRbP+ynXz/pIxl/4tsOv9qQgH/akIB/2pCAf9qQgH/AAAAAAAAAAAAAAAAVlAnesWpSP+efSn/c0wP/8Ckif+HZDD/akIB/2pCAf9qQgH/akIB/2pCAf9uRwj/s59+/8Gwlf+GZjH/gF4n/8S0mv9qQwL/akIB/4ZmMv+3pIb/rph1/2pCAf9sRAT/bUYG/2pCAf9qQgH/akIB/2pCAf8AAAAAAAAAAAAAAABFOxlaxalI/7mcP/9sRAP/uZ1//518Uv9qQgH/akIB/2pCAf9qQgH/akIB/2pCAf9qQgH/akIB/2pCAf9+XCT/cUoN/2pCAf9qQgH/akIB/2pCAf9rQwP/mn9T/+HZzP+2ooL/akIB/2pCAf9qQgH/akIB/wAAAAAAAAAAAAAAADIrEkTFqUj/wqZG/3ZQCv+dfVP/uZ1//29ICv9qQgH/akIB/2pCAf9qQgH/akIB/4NiLf+SdUX/i206/8y/qf/Vybf/mn5S/4NiLP9/XSX/moBU/9fMu//9/fz//////8Cwlf9qQgH/akIB/2pCAf9qQgH/AAAAAAAAAAAAAAAADQsFEsWpSP/FqUj/iWUZ/3JLDv+0l3f/pohh/2tEBP9qQgH/akIB/2pCAf9qQgH/oYhf//7+/v//////////////////////////////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 />
<style>
	.sf-hidden {
		display: none !important
	}
</style>
<link rel=canonical href=https://www.alaskaair.com/www2/ssl/myalaskaair/MyAlaskaAir.aspx>

<body style=overflow:auto>
	<div id=sitewide-advisory>
	</div>
	<div class="optanon-alert-box-wrapper hide-accept-button" role=alertdialog aria-labelledby=alert-box-title
		aria-describedby=alert-box-message style=display:none></div>
	<div id=optanon class=modern>
		<div id=optanon-popup-bg class=sf-hidden></div>
		<div id=optanon-popup-wrapper role=dialog aria-modal=true tabindex=-1 lang=en-US class=sf-hidden></div>
	</div>
	<style class=sf-hidden>
		footer {
			display: block
		}

		a {
			background-color: transparent
		}

		a:active,
		a:hover {
			outline: 0
		}

		b {
			font-weight: 500
		}

		img {
			border: 0
		}

		svg:not(:root) {
			overflow: hidden
		}

		input {
			font: inherit;
			margin: 0
		}

		.hidden {
			display: none !important
		}

		.pure-g {
			letter-spacing: -.31em;
			text-rendering: optimizespeed;
			display: -webkit-flex;
			-webkit-flex-flow: row wrap;
			display: -ms-flexbox;
			-ms-flex-flow: row wrap;
			-ms-align-content: flex-start;
			-webkit-align-content: flex-start;
			align-content: flex-start
		}

		.pure-g [class*=pure-u] {
			font-family: AS Circular, Helvetica Neue, Arial, sans-serif
		}

		.pure-u-1,
		.pure-u-1-2 {
			display: inline-block;
			zoom: 1;
			letter-spacing: normal;
			word-spacing: normal;
			vertical-align: top;
			text-rendering: auto
		}

		.pure-u-1-2 {
			width: 50%
		}

		.pure-u-1 {
			width: 100%
		}

		.pure-menu {
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box
		}

		.pure-menu-list {
			list-style: none
		}

		.pure-menu-item,
		.pure-menu-list {
			position: relative;
			margin: 0;
			padding: 0
		}

		.pure-menu-item {
			height: 100%
		}

		.pure-menu-link {
			display: block;
			white-space: nowrap
		}

		.pure-menu-horizontal {
			white-space: nowrap
		}

		.pure-menu-horizontal .pure-menu-list {
			display: inline-block
		}

		.pure-menu-horizontal .pure-menu-item {
			display: inline-block;
			zoom: 1
		}

		.pure-menu-has-children>.pure-menu-link:after {
			padding-left: .5em;
			content: "?";
			font-size: small
		}

		.pure-menu-horizontal .pure-menu-has-children>.pure-menu-link:after {
			content: "?"
		}

		.pure-menu-active>.pure-menu-link,
		.pure-menu-link:focus,
		.pure-menu-link:hover {
			background-color: #eee
		}

		.pure-menu-selected .pure-menu-link,
		.pure-menu-selected .pure-menu-link:visited {
			color: #000
		}

		@media screen and (min-width:48em) {
			.pure-u-md-1-4 {
				display: inline-block;
				zoom: 1;
				letter-spacing: normal;
				word-spacing: normal;
				vertical-align: top;
				text-rendering: auto
			}

			.pure-u-md-1-4 {
				width: 25%
			}
		}

		@font-face {
			font-family: AS Circular;
			src: url(data:font/x-woff;base64,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) format("woff");
			font-weight: 400;
			font-style: normal
		}

		@font-face {
			font-family: AS Circular;
			src: url(data:font/x-woff;base64,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) format("woff");
			font-weight: 700;
			font-style: normal
		}

		@font-face {
			font-family: Circular;
			src: url(data:font/x-woff;base64,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) format("woff");
			font-weight: 400;
			font-style: normal
		}

		.cart-count {
			background-color: #01426a;
			border-radius: 10px;
			color: #fff;
			display: inline-block;
			font-size: 12px;
			font-weight: 500;
			line-height: 1;
			min-width: 10px;
			padding: 3px 7px;
			position: relative;
			text-align: center;
			top: -2px;
			vertical-align: baseline;
			white-space: nowrap;
			left: 2px
		}

		.cart-count span {
			position: relative;
			top: 1px
		}

		#skip-to-main-link:focus {
			color: #fff
		}

		#hf-top {
			position: relative;
			margin: 0 auto;
			max-width: 1232px;
			width: 100%;
			font-size: 16px;
			height: 55px;
			line-height: 1.7
		}

		#hf-top>ul {
			float: right
		}

		#hf-top>ul>li {
			vertical-align: top
		}

		#hf-top>ul>li>a {
			color: #01426a;
			font-size: 14px;
			padding: 13px 8px
		}

		#hf-top .pure-menu-link {
			background-color: transparent
		}

		#hf-h {
			position: relative;
			z-index: 2
		}

		#skip-to-main-content {
			position: absolute;
			text-align: center;
			width: 100%
		}

		#skip-to-main-content:active,
		#skip-to-main-content:focus {
			color: #fff
		}

		body #hf-h .ow-item .menu-big-a.ow-logo-link {
			margin-right: 16px !important
		}

		body #hf-h .ow-item .menu-big-a.ow-logo-link .ow-logo {
			width: 46.5px;
			margin-top: -35px;
			margin-left: -15px
		}

		#hf-nav {
			font-size: 16px;
			line-height: 24px;
			position: relative;
			margin: 0 auto;
			max-width: 1232px;
			width: 100%;
			text-align: left;
			height: 75px
		}

		#hf-nav .pure-menu-item {
			vertical-align: top;
			position: static
		}

		#hf-nav .pure-menu-link {
			background-color: transparent;
			font-weight: 500
		}

		#hf-nav>.pure-menu-list {
			width: 100%;
			height: 100%
		}

		#ezb-hf-nav>.pure-menu-list>.pure-menu-item:first-child,
		#hf-nav>.pure-menu-list>.pure-menu-item:first-child,
		#ta-hf-nav>.pure-menu-list>.pure-menu-item:first-child {
			padding-top: 0
		}

		#ezb-hf-nav>.pure-menu-list>.pure-menu-item:first-child a,
		#hf-nav>.pure-menu-list>.pure-menu-item:first-child a,
		#ta-hf-nav>.pure-menu-list>.pure-menu-item:first-child a {
			padding-left: 0;
			margin-left: 0;
			margin-right: 35px;
			width: 170px
		}

		#hf-nav>.pure-menu-list>.pure-menu-item>a {
			border-bottom: 4px solid transparent;
			color: #01426a;
			font-size: 22px;
			height: 30px;
			margin: 0 14px;
			padding: 0;
			position: relative
		}

		#ezb-hf-nav>.pure-menu-list>.pure-menu-item>a:focus,
		#ezb-hf-nav>.pure-menu-list>.pure-menu-item>a:hover,
		#hf-nav>.pure-menu-list>.pure-menu-item>a:focus,
		#hf-nav>.pure-menu-list>.pure-menu-item>a:hover,
		#ta-hf-nav>.pure-menu-list>.pure-menu-item>a:focus,
		#ta-hf-nav>.pure-menu-list>.pure-menu-item>a:hover {
			transition: all .3s ease;
			text-decoration: none;
			border-bottom: 3px solid #01426a
		}

		#hf-h {
			margin-bottom: 24px;
			text-align: center;
			padding-left: inherit;
			background-color: #fff
		}

		@media (min-width:1024px) {
			#hf-h {
				box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .1)
			}
		}

		#hf-nav .alaska-logo {
			position: relative;
			top: -35px;
			fill: currentColor;
			height: 70px;
			width: 163px
		}

		.signed-in-true .show-if-signed-in-true {
			text-align: left
		}

		.signed-in-true .show-if-signed-in-true {
			display: block
		}

		.hf-f {
			background-color: #e9e9e9;
			color: #3c3b3f;
			overflow: hidden;
			position: relative;
			line-height: 1.7
		}

		.hf-f footer {
			background: #01426a;
			padding: 40px 0;
			font-size: 14px
		}

		.hf-f .pure-g {
			max-width: 1232px;
			margin: 0 auto;
			padding: 0 16px
		}

		.hf-f a {
			font-size: 12px;
			line-height: 2.5em
		}

		.hf-f a,
		.hf-f a:focus,
		.hf-f a:hover,
		.hf-f a:visited {
			color: #fff
		}

		.hf-f a:focus,
		.hf-f a:hover {
			text-decoration: underline
		}

		.hf-f h5 {
			color: #fff;
			font-size: 14px;
			line-height: 15px
		}

		.hf-f h5 {
			margin: 12px 0
		}

		.hf-f .social-icons {
			margin-top: 17px;
			margin-bottom: 6px
		}

		.hf-f .social-icons a:hover {
			text-decoration: none
		}

		.hf-f .social-icons a:hover img {
			opacity: .3;
			display: inline
		}

		.hf-f .social-icons img {
			vertical-align: top
		}

		.hf-f .copyright {
			font-size: 11px;
			margin-top: 5px
		}

		.hf-f .footerLists {
			list-style: none;
			padding-left: 0;
			margin-left: 0;
			margin-top: 0;
			margin-bottom: 12px
		}

		.hf-f [class^=icon-] {
			width: 24px;
			height: 24px;
			fill: #fff
		}

		.hf-f .stepout {
			font-size: 11px
		}

		.hf-f .step-out-footer-link {
			width: 9px;
			height: 9px;
			fill: currentColor;
			margin-left: 5px
		}

		.hf-f .step-out-footer-image-display {
			width: 12px;
			height: 12px;
			fill: currentColor
		}

		.hf-f .step-out-footer-text {
			margin-left: 5px;
			width: 60%
		}

		.hf-f .footer-headlines.hf-collapsed .expanded-hide {
			-ms-transform: rotate(90deg);
			transform: rotate(90deg)
		}

		.hf-f .footer-headlines a svg {
			display: none;
			position: absolute;
			right: 0;
			top: 6px;
			-ms-transform: rotate(180deg);
			transform: rotate(180deg)
		}

		.hf-f .hf-products {
			margin-bottom: 24px;
			padding-top: 48px;
			line-height: 1.7
		}

		.hf-f .hf-products .text-center {
			text-align: center
		}

		.hf-f .hf-products .footer-product-icons {
			width: 64px;
			height: 64px;
			opacity: .565;
			margin: 0 11px 12px;
			display: inline
		}

		.hf-f .hf-products a:hover {
			text-decoration: none
		}

		.hf-f .hf-products a:hover .footer-product-icons {
			opacity: .81
		}

		.hf-f .hf-products h4 {
			font-size: 16px;
			font-weight: 400;
			color: #3c3b3f;
			margin: 0;
			line-height: 1.1
		}

		.hf-f .hf-products .btn-link {
			color: #656565;
			font-size: 13px;
			font-weight: 500
		}

		.hf-f .hf-products .btn-link:hover {
			text-decoration: underline
		}

		.hf-f .hf-products p {
			color: #656565;
			font-size: 13px;
			line-height: 24px;
			margin: 4px auto 0;
			max-width: 242px
		}

		.hf-f .hf-products .pure-g {
			padding: 0 16px
		}

		.hf-f .hf-products .pure-g>div {
			padding-bottom: 24px
		}

		.hf-f .hf-products .step-out-footer-link {
			width: 9px;
			height: 9px;
			fill: currentColor;
			margin-left: 1px
		}

		.hf-f .fine-print {
			color: #fff
		}

		.hf-f .airtrfx-link-list {
			width: 80%;
			word-break: break-all
		}

		.hf-f .airtrfx-link-list a span {
			display: inline-block;
			line-height: 1.5em;
			white-space: nowrap
		}

		.hf-f .airtrfx-link-list a:not(:last-of-type):after {
			content: "|";
			margin: 0 .5em
		}

		@media (max-width:1024px -1) {
			.hf-f .airtrfx-link-list {
				margin-top: 15px;
				width: 70%
			}
		}

		@media (max-width:479px) {
			.hf-f .airtrfx-link-list {
				width: 100%
			}
		}

		.hf-f #img-eskimo {
			position: absolute;
			height: 0;
			padding: 0 0 300px;
			right: -45px;
			bottom: -80px;
			width: 190px;
			pointer-events: none
		}

		@media (min-width:1232px) {
			.hf-f #img-eskimo {
				position: relative;
				right: auto;
				bottom: 230px;
				margin: 0 auto;
				left: 510px;
				width: 300px
			}
		}

		.hf-f #img-eskimo img {
			position: absolute;
			height: 100%;
			width: 100%;
			left: 0;
			top: 0
		}

		@media (max-width:1024px -1) {
			.hf-f .hf-hide-sm {
				display: none
			}

			.hf-f .hf-show-sm {
				display: block
			}

			.hf-f .hf-products p {
				width: auto;
				padding: 0 12px
			}

			.hf-f .hf-products .hf-secondrow {
				margin-top: 80px
			}

			.hf-f .hf-products .pure-g {
				padding-bottom: 24px
			}

			.hf-f .hf-products .pure-g>div {
				padding-bottom: 0;
				border-bottom: none
			}

			.hf-f .footer-headlines a {
				cursor: pointer;
				display: block;
				border-bottom: 1px solid #b2b2b2;
				padding: 10px 16px 10px 0
			}

			.hf-f .footer-headlines .expanded-hide,
			.hf-f .footer-headlines.hf-collapsed .expanded-show {
				display: none
			}

			.hf-f .footer-headlines.hf-collapsed .expanded-hide {
				display: inline-block
			}

			.hf-f .footer-headlines a svg {
				display: block
			}

			.hf-f .panel-collapsible.hf-collapse {
				display: none
			}
		}

		body,
		html {
			padding: 0;
			margin: 0;
			font-size: 16px
		}

		.hf,
		.hf * {
			box-sizing: border-box;
			font-family: AS Circular, Helvetica Neue, Arial, sans-serif
		}

		.hf a {
			text-decoration: none
		}

		.hf a:hover {
			text-decoration: underline
		}

		.hf .no-hover-underline:focus,
		.hf .no-hover-underline:hover {
			border: none !important
		}

		.hf .pure-menu-horizontal .pure-menu-has-children>.pure-menu-link:after {
			content: none
		}

		.hf .pure-menu-has-children>.pure-menu-link:after {
			content: none
		}

		.hf .sr-only {
			position: absolute;
			width: 1px;
			height: 1px;
			margin: -1px;
			padding: 0;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			border: 0
		}

		.hf .sr-only-focusable:active,
		.hf .sr-only-focusable:focus {
			position: static;
			width: auto;
			height: auto;
			margin: 0;
			overflow: visible;
			clip: auto
		}

		@media (max-width:1023px) {
			#hf-nav {
				display: none
			}

			#skip-to-main-link:focus {
				color: #01426a
			}

			body {
				margin-top: 112px
			}

			#hf-top {
				display: none
			}

			.hf-f .copyright {
				margin-right: 150px
			}

			.hf-f .step-out-footer-text {
				line-height: 1
			}
		}

		@media (max-width:319px) {
			body {
				margin-top: 100px
			}
		}

		@media (min-width:1024px) {
			#hf-nav>.pure-menu-list>.pure-menu-item>a {
				margin: 0 4px;
				font-size: 20px;
				padding: 10px 7px;
				height: 36px
			}
		}

		@media (min-width:1024px) {
			.hf-f .alaska-footer {
				height: 440px
			}
		}

		.search-wrapper ::placeholder {
			color: #767676;
			opacity: 1;
			font-size: 14px
		}

		.search-wrapper input {
			background-color: #fff;
			border: 1.5px solid #01426a;
			border-radius: 5px;
			padding: 6px 32px 6px 8px;
			font-family: AS Circular, Helvetica Neue, Arial, sans-serif;
			font-size: 16px;
			color: #01426a;
			width: 100%;
			float: left;
			display: block;
			height: 40px;
			background-image: none;
			box-sizing: border-box
		}

		.search-wrapper .mobile-search-icon {
			display: inline-block;
			vertical-align: middle;
			width: 17px;
			height: 17px;
			margin: 9px 0 0 -24px;
			opacity: .8
		}

		@media (min-width:1024px) {
			.search-box {
				float: right
			}
		}

		@media (min-width:660px) {
			.st-default-autocomplete {
				width: 393px !important;
				margin-left: 0
			}
		}

		@media (min-width:1024px) {
			.st-default-autocomplete {
				margin-left: -244px
			}
		}

		@media (min-width:1232px) {
			.st-default-autocomplete {
				margin-left: -210px
			}
		}

		@media (max-width:1024px -1) {
			.st-default-autocomplete {
				top: 40px !important
			}
		}

		@media (min-width:1024px) {
			.menu-default {
				border-bottom: 1px solid #dbdbdb;
				padding: 0 16px
			}
		}

		.menu-default .sign-in-border {
			border-left: 1px solid #dbdbdb;
			padding-left: 16px
		}

		html .form-control {
			margin: 0;
			display: block;
			line-height: 1.72857;
			height: 42px;
			background-color: #fff;
			background-image: none;
			border: 1px solid rgba(0, 0, 0, .15);
			box-shadow: inset 0 1px 1px rgba(0, 0, 0, .1);
			transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
			border-radius: 0;
			padding: 8px 10px
		}

		#hf-top.hf-nav-test #navbar-greeting-link {
			padding-right: 0
		}

		#hf-top.hf-nav-test>ul>li>a {
			text-transform: none
		}

		#hf-top.hf-nav-test .arrow-down {
			border-top: 5px solid #01426a;
			border-left: 4px solid transparent;
			border-right: 4px solid transparent;
			top: 9px;
			margin-left: 5px;
			position: relative
		}

		.hf-nav-test .menu-desktop-user-svg {
			height: 18px;
			width: 18px;
			stroke: #01426a;
			float: left;
			margin-right: 10px
		}

		ul.top-menu-list.nav-ul {
			margin: 0
		}

		body #hf-nav.hf-nav-test .pure-menu-list>.pure-menu-item {
			padding-top: 0
		}

		body #hf-nav.hf-nav-test .menu-big-a,
		body #hf-nav.hf-nav-test .menu-small-a {
			padding: 8px 2px 38px;
			height: 36px;
			margin: 0 5px !important;
			border-bottom: 4px solid transparent
		}

		@media (min-width:1024px) {

			body #hf-nav.hf-nav-test .menu-big-a,
			body #hf-nav.hf-nav-test .menu-small-a {
				padding: 15px 3px 57px;
				font-size: 17px;
				height: 36px
			}
		}

		body #hf-nav.hf-nav-test .menu-small-a {
			font-size: 16px !important;
			font-weight: 400;
			line-height: 30px
		}

		@media (min-width:1024px) {
			body #hf-nav.hf-nav-test .menu-small-a {
				line-height: 31px
			}
		}

		body #hf-nav.hf-nav-test .menu-big-a {
			font-size: 18px !important;
			line-height: 28px
		}

		@media (min-width:1024px) {
			body #hf-nav.hf-nav-test .menu-big-a {
				font-size: 20px !important
			}
		}

		body #hf-nav.hf-nav-test .search-wrapper {
			max-width: 185px;
			margin: 1px 0 0 4px
		}

		@media (min-width:1024px) {
			body #hf-nav.hf-nav-test .search-wrapper {
				padding-top: 9px
			}
		}

		@media (min-width:1024px) and (max-width:1232px) {
			body #hf-nav.hf-nav-test .search-wrapper {
				max-width: 99px
			}
		}
	</style>
	<div id=hf-h class="hf hf-h signed-in-true" no-print-web-checkin=true>
		<style class=sf-hidden>
			body #hf-h .menu-big-li.ow-item {
				display: inline-block
			}
		</style>
		<div id=skip-to-main-content><a id=skip-to-main-link href=#mainContent class="sr-only sr-only-focusable">Skip to
				main content</a></div>
		<div style=display:none></div>
		<div class="show-only-in-public menu-default" id=abId0.2547153969952842>
			<div id=hf-top class="hf-nav-test pure-menu pure-menu-horizontal" role=navigation>
				<ul class="top-menu-list nav-ul">
					<li id=espanol class="pure-menu-item language-link web-checkin-remove hide-if-not-as-host"><a id=navLocaleES
							href=https://alaskaair.convertlanguage.com/alaskaair/enes/www2/ssl/myalaskaair/MyAlaskaAir.aspx
							class=pure-menu-link lang=es data-omniture-tag=nav:espanol><span class=focus-underline>Español</span></a>
					<li id=english class="pure-menu-item language-link hidden sf-hidden">
					<li class="pure-menu-item web-checkin-remove hide-if-not-as-host"><a
							href="https://www.alaskaair.com/shopping/cart?lid=nav:cart&amp;int=AS_NAV_CART_-prodID:ShoppingBooking"
							class=pure-menu-link><span class=focus-underline>Cart</span> <span
								class=cart-count><span>0</span></span></a>
					<li class="pure-menu-item hide-if-not-as-host"><a
							href="https://www.alaskaair.com/content/about-us/help-contact?lid=nav:contactUs" class=pure-menu-link
							data-omniture-tag=nav:contactUs><span class=focus-underline>Help center</span></a>
					<li class="pure-menu-item hide-if-not-as-host"><a
							href="https://www.alaskaair.com/account/join-mileage-plan?lid=nav:MP%20Join&amp;int=AS_NAV_MPJoin_-prodID:MPEnroll"
							class=pure-menu-link data-omniture-tag=nav:Join><span class=focus-underline>Sign up</span></a>
					<li class="pure-menu-item show-if-super-user web-checkin-remove sf-hidden">
					<li
						class="pure-menu-item pure-menu-has-children collapse-on-outside-click web-checkin-remove hide-if-not-as-host">
						<a id=navbar-greeting-link class=pure-menu-link href=# role=button aria-haspopup=true
							aria-controls=navbar-greeting-popup>
							<div class=sign-in-border><svg class="menu-mobile-user-svg menu-desktop-user-svg show-if-signed-in-true"
									width=60 height=60 viewBox="0 0 60 60" xmlns=http://www.w3.org/2000/svg
									aria-labelledby=profile-icon-label>
									<title id=profile-icon-label>User Profile Information</title>
									<g fill=none fill-rule=evenodd stroke-width=4>
										<path
											d="M46 45c-3.153-1.492-6.33-3.302-9.497-4.965-.49-.308-.898-.695-1.074-1.28-.45-1.525 1.107-2.814 1.954-3.892 1.019-1.308 1.982-2.666 2.542-4.242 1.241-3.454 1.246-7.497-.51-10.781-1.615-3.026-4.588-5.278-8.033-5.743A10.141 10.141 0 0 0 30.035 14h-.07c-.453.005-.903.032-1.347.097-3.45.465-6.418 2.717-8.038 5.743-1.755 3.284-1.746 7.327-.51 10.781.565 1.576 1.524 2.934 2.547 4.242.843 1.078 2.403 2.367 1.954 3.892-.176.585-.588.972-1.079 1.28C20.33 41.698 17.153 43.508 14 45"
											stroke-linecap=round stroke-linejoin=round></path>
										<circle cx=30 cy=30 r=29></circle>
									</g>
								</svg><span class="navbar-greeting-name focus-underline populate-display-name">Hi, James</span><span
									class=arrow-down></span></div>
						</a>
						<div class="pure-menu-children navbar-greeting-popup dropdown-menu sf-hidden" id=navbar-greeting-popup
							role=menu aria-hidden=true aria-labelledby=navbar-greeting-link></div>
				</ul>
			</div>
			<div id=hf-nav class="hf-nav-test pure-menu pure-menu-horizontal">
				<ul class="pure-menu-list nav-ul" role=menu>
					<li class="pure-menu-item pure-menu-selected" role=presentation><a href=https://www.alaskaair.com/
							class="pure-menu-link no-hover-underline" aria-label="Go to Alaska Airlines Home"><svg
								xmlns=http://www.w3.org/2000/svg class=alaska-logo aria-labelledby=alaskaLogoTitle viewBox="0 0 83 35"
								width=163px height=70px>
								<title id=alaskaLogoTitle>Alaska Airlines</title>
								<g>
									<path
										d="M10.2 33.4H7.59999L7.09999 34.9H5.79999L8.19999 28.5H9.59999L12 34.9H10.7L10.2 33.4ZM7.99999 32.2H9.79999L8.89999 29.8L7.99999 32.2Z">
									</path>
									<path d="M16.5 34.8V28.4H17.8V34.8H16.5Z"></path>
									<path
										d="M25 32.4H24.4V34.9H23.2V28.5H25.7C26.9 28.5 27.7 29.4 27.7 30.5C27.7 31.4 27.2 32.1 26.3 32.3L27.7 34.9H26.3L25 32.4ZM25.3 31.3C25.9 31.3 26.3 30.9 26.3 30.4C26.3 29.9 25.9 29.5 25.3 29.5H24.3V31.3H25.3V31.3Z">
									</path>
									<path d="M32.6 34.8V28.4H33.8V33.6H36.6V34.8H32.6V34.8Z"></path>
									<path d="M41.6 34.8V28.4H42.9V34.8H41.6Z"></path>
									<path d="M52.3 34.8L49.4 30.3V34.8H48.2V28.4H49.7L52.3 32.6V28.4H53.5V34.8H52.3V34.8Z"></path>
									<path d="M59 34.8V28.4H63V29.6H60.3V31.1H62.8V32.2H60.3V33.7H63V34.9H59V34.8Z"></path>
									<path
										d="M71.3 30.3C71.2 29.9 70.9 29.4 70.1 29.4C69.5 29.4 69.1 29.8001 69.1 30.2001C69.1 30.6001 69.3 30.8 69.8 30.9L70.7 31.1C71.9 31.3 72.5 32.1 72.5 33C72.5 34 71.7 35 70.2 35C68.5 35 67.8 33.9 67.7 33L68.8 32.7001C68.9 33.3001 69.3 33.9001 70.2 33.9001C70.9 33.9001 71.2 33.6 71.2 33.1C71.2 32.7 70.9 32.4 70.4 32.3L69.5 32.1C68.5 31.9 67.8 31.2 67.8 30.3C67.8 29.2 68.8 28.3 70 28.3C71.5 28.3 72.1 29.2 72.3 30L71.3 30.3Z">
									</path>
									<path
										d="M39.7 1L30.5 16.5C29.5 18.1 29 19.7 28.9 21.3H25.3C25.5 19.3 26.3 17.5 27.9 14.8L34.4 4C35.6 1.7 36.9 1 39.2 1H39.7Z">
									</path>
									<path
										d="M39 17.3C38.3 17.9 37 18.9 35.9 18.9C35.1 18.9 35.1 18.2 35.6 17.2C37.6 13.5 39.6 11.5 42.1 11.5H42.6L39 17.3ZM42.4 9.30005C37.7 9.30005 34.8 12 32.3 18C31.7 19.5 31.3 21.4 33.5 21.3C34.7 21.3 36.8 20.6 38.3 19.6C38.2 20.1 38.1 20.8 38.2 21.2H41.5C41.6 19.9 42.1 18.3 43.2 16.4L47.3 9.50005C45.6 9.40005 44 9.30005 42.4 9.30005Z">
									</path>
									<path
										d="M72.8 17.3C72.1 17.9 70.8 18.9 69.7 18.9C68.9 18.9 68.9 18.2 69.4 17.2C71.4 13.5 73.4 11.5 75.9 11.5H76.4L72.8 17.3ZM76.2 9.30005C71.5 9.30005 68.6 12 66.1 18C65.5 19.5 65.1 21.4 67.3 21.3C68.5 21.3 70.6 20.6 72.1 19.6C72 20.1 71.9 20.8 72 21.2H75.3C75.4 19.9 75.9 18.3 77 16.4L81 9.60005C79.4 9.40005 77.8 9.30005 76.2 9.30005Z">
									</path>
									<path
										d="M65.5 24.6001H64.4C63 24.6001 61.8 23.7001 61.4 22.3001L59.8 16.1001L56.7 21.2001H53.2L63 4.60007C64.3 2.50007 65.6 1.70007 67.9 1.70007H68.3L61.8 12.7001L66.7 9.30007H70.6L62.4 15.0001L65.5 24.6001Z">
									</path>
									<path
										d="M33.3 4.88311e-05C30 4.88311e-05 28.3 0.900049 25.1 3.20005L14.1 11.1H7C5 11.1 3.3 11.2 2.1 12.4L0.3 14.1C0.3 14.1 5.6 13.9 10.5 13.7L0 21.2001H4.5L15.2 13.5C17.3 13.4 18.7 13.4 18.7 13.4C21.2 13.3 22.6 11.1 22.6 11.1H18.5L27.2 4.80005L20.8 15.2C19.4 17.6 18.8 19.3001 18.5 21.1H22.2C22.3 19.5 22.9 17.9 23.8 16.3L32.6 1.60005C33.2 0.600049 33.7 -0.199951 33.7 -0.199951L33.3 4.88311e-05Z">
									</path>
									<path
										d="M50.7 12.7C50.7 13 50.8 13.2 51.4 13.6L52.4 14.3C53.5 15 53.9 16.1 53.8 17C53.4 19.5 51.6 21.4 47.8 21.4C46.1 21.4 45.4 21.3 43.4 21L44.9 18.5C46.3 18.7 47.1 18.9 48.1 18.9C49.5 18.9 50.1 18.2 50.2 17.7C50.2 17.4 50.1 17 49.4 16.5L48.6 15.9C47.3 15 47 14.3 47.2 13.1C47.5 10.9 50 9.30005 53.5 9.30005C54.6 9.30005 55.8 9.40005 57.1 9.50005L55.7 11.9C54.8 11.8 53.4 11.8 52.5 11.8C51.5 11.8 50.8 12.2 50.7 12.7Z">
									</path>
									<path
										d="M80.7 17.7001C81.7 17.7001 82.5 18.5001 82.5 19.6001C82.5 20.6001 81.7 21.5001 80.7 21.5001C79.7 21.5001 78.9 20.7001 78.9 19.6001C78.9 18.6001 79.7 17.7001 80.7 17.7001ZM80.7 21.1001C81.5 21.1001 82.1 20.5001 82.1 19.6001C82.1 18.8001 81.5 18.1001 80.7 18.1001C79.9 18.1001 79.3 18.7001 79.3 19.6001C79.3 20.4001 79.9 21.1001 80.7 21.1001ZM80.5 20.6001H80.1V18.6001H80.8C81.2 18.6001 81.5 18.9001 81.5 19.2001C81.5 19.5001 81.3 19.7001 81.1 19.8001L81.6 20.6001H81L80.6 19.8001H80.4V20.6001H80.5ZM80.7 19.5001C80.9 19.5001 81.1 19.4001 81.1 19.2001C81.1 19.0001 81 18.9001 80.7 18.9001H80.4V19.5001H80.7Z">
									</path>
								</g>
							</svg></a>
					<li class="pure-menu-item menu-big-li ow-item" style=visibility:true><a
							href="https://www.alaskaair.com/content/oneworld?lid=nav:oneworld-hub"
							class="pure-menu-link no-hover-underline top-level-link menu-big-a ow-logo-link"
							aria-label="Go to oneworld Hub"><img
								src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHJvbGU9ImltZyIgYXJpYS1oaWRkZW49InRydWUiIHN0eWxlPSJ3aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvOyBmaWxsOiB0cmFuc3BhcmVudCIgY2xhc3M9IiIgPgogICAgPHRpdGxlPk9uZXdvcmxkPC90aXRsZT4KICAgIDxkZXNjPkxvZ28gaW1hZ2UgZm9yIE9uZXdvcmxkIEFsbGlhbmNlPC9kZXNjPgogICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0ib25ld29ybGRfc3ZnX19hIiBjeD0iMjMuNjMyJSIgY3k9IjE3Ljg3NSUiIHI9IjE2Mi43MjUlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii41Ij48L3N0b3A+CiAgICAgIDxzdG9wIG9mZnNldD0iLjI4MyIgc3RvcC1jb2xvcj0iI2FkYWJkMyIgc3RvcC1vcGFjaXR5PSIuNTk1Ij48L3N0b3A+CiAgICAgIDxzdG9wIG9mZnNldD0iLjU4IiBzdG9wLWNvbG9yPSIjNWM1OGE4IiBzdG9wLW9wYWNpdHk9Ii42OTUiPjwvc3RvcD4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNzkxIiBzdG9wLWNvbG9yPSIjMmEyNDhjIiBzdG9wLW9wYWNpdHk9Ii43NjYiPjwvc3RvcD4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMTYxMDgyIiBzdG9wLW9wYWNpdHk9Ii44Ij48L3N0b3A+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJvbmV3b3JsZF9zdmdfX2IiIGN4PSIyMC40MzIlIiBjeT0iMTUuNzExJSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCguNjE1MjQgLjc4ODM0IC0xLjAxMTI2IC43ODkyMiAuMjM3IC0uMTI4KSIgcj0iNzcuODQxJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuOSI+PC9zdG9wPgogICAgICA8c3RvcCBvZmZzZXQ9Ii4yODMiIHN0b3AtY29sb3I9IiNhZGFiZDMiIHN0b3Atb3BhY2l0eT0iLjYxNSI+PC9zdG9wPgogICAgICA8c3RvcCBvZmZzZXQ9Ii41OCIgc3RvcC1jb2xvcj0iIzVjNThhOCIgc3RvcC1vcGFjaXR5PSIuMzE2Ij48L3N0b3A+CiAgICAgIDxzdG9wIG9mZnNldD0iLjc5MSIgc3RvcC1jb2xvcj0iIzJhMjQ4YyIgc3RvcC1vcGFjaXR5PSIuMTA0Ij48L3N0b3A+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzE2MTA4MiIgc3RvcC1vcGFjaXR5PSIwIj48L3N0b3A+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogIDwvZGVmcz4KCiAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS41IDEuNSkiPgogICAgICA8cGF0aCBkPSJNMCAxMC40ODNjMCA1Ljc4IDQuNyAxMC40ODIgMTAuNDgzIDEwLjQ4MiA1Ljc4MSAwIDEwLjQ4Mi00LjcgMTAuNDgyLTEwLjQ4MkMyMC45NjUgNC43IDE2LjI2MiAwIDEwLjQ4MyAwIDQuNzAzIDAgMCA0LjcgMCAxMC40ODN6bTEuMDcgMGMwLTUuMTkyIDQuMjIyLTkuNDE0IDkuNDEzLTkuNDE0IDUuMTkgMCA5LjQxMiA0LjIyMyA5LjQxMiA5LjQxNCAwIDUuMTktNC4yMjIgOS40MTItOS40MTIgOS40MTItNS4xOTEgMC05LjQxNC00LjIyMi05LjQxNC05LjQxMnoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICA8Y2lyY2xlIGN4PSIxMC40ODMiIGN5PSIxMC40ODMiIGZpbGw9IiMxNjEwODIiIHI9IjkuOTAyIj48L2NpcmNsZT4KICAgICAgPGNpcmNsZSBjeD0iOS45NTIiIGN5PSI5Ljk1MiIgZmlsbD0idXJsKCNvbmV3b3JsZF9zdmdfX2EpIiBvcGFjaXR5PSIuNSIgcj0iOS45MDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC41MzEgLjUzMSkiPjwvY2lyY2xlPgogICAgICA8Y2lyY2xlIGN4PSI5Ljk1MiIgY3k9IjkuOTUyIiBmaWxsPSJ1cmwoI29uZXdvcmxkX3N2Z19fYikiIHI9IjkuOTAyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSguNTMxIC41MzEpIj48L2NpcmNsZT4KICAgICAgPHBhdGggZD0iTTcuNzYyIDEwLjU3MWMuMDQ0LS4yNjYuMjIzLS40NDYuNDktLjQ0Ni4yNjggMCAuNDQ2LjIyNS40NDYuNDQ2em0xLjY1LjQwMmMuMDQ0LS43NTgtLjM1Ny0xLjM4My0xLjE2LTEuMzgzLS42NyAwLTEuMjA0LjQ5LTEuMjA0IDEuMjA2IDAgLjc1Ny40OSAxLjIwMyAxLjI0OCAxLjIwMy40OTEgMCAuOTgyLS4yMjQgMS4xMTYtLjc1N2gtLjY3Yy0uMDg4LjE3Ny0uMjIyLjI2Ni0uNC4yNjYtLjMxMyAwLS40OTItLjIyMy0uNDkyLS41MzV6bTkuMjMzLjgwM2MuNTggMCAuODAzLS40OS44MDMtLjk4MXMtLjIyNC0uOTgyLS44MDMtLjk4MmMtLjUzNSAwLS43NTguNDktLjc1OC45ODJzLjIyMy45ODEuNzU4Ljk4MW0xLjA3MS4xNzhoLS4yNjh2LS40NDZjLS4xMzQuMzEzLS40OS40OTEtLjgwMy40OTEtLjY3IDAtMS4wMjUtLjU4LTEuMDI1LTEuMjA0IDAtLjYyNS4zMTItMS4yMDUgMS4wMjUtMS4yMDUuMzU3IDAgLjY2OS4xOC44MDMuNDlWOC43ODhoLjI2N3YzLjE2N005LjU0NiA5LjY4aC4zMTJsLjU4IDEuOTY0LjUzNS0xLjk2NGguMzEybC41MzYgMS45NjQuNTgtMS45NjRoLjM1NmwtLjcxMyAyLjI3NWgtLjMxM2wtLjU3OS0xLjkxNy0uNTM2IDEuOTE3aC0uMzEyem01LjUzMiAxLjExNmMwIC42NjktLjM1OCAxLjIwNC0xLjA3MiAxLjIwNC0uNzEzIDAtMS4wNy0uNTM1LTEuMDctMS4yMDRzLjM1Ny0xLjIwNSAxLjA3LTEuMjA1Yy42Ny4wNDUgMS4wNy41OCAxLjA3IDEuMjA2bS0xLjg3MyAwYzAgLjQ5LjI2OC45OC44MDMuOTguNTM2IDAgLjgwMy0uNDkuODAzLS45ODFzLS4yNjctLjk4Mi0uODAzLS45ODJjLS41MzUuMDQ1LS44MDMuNTM1LS44MDMuOTgybTIuMjc1LTEuMTE2aC4yNjh2LjUzNmEuODcyLjg3MiAwIDAxLjg0Ny0uNTh2LjI2N2MtLjQ5LS4wNDQtLjg0Ny4zNTgtLjg0Ny44MDR2MS4yMDRoLS4yNjdWOS42OG0xLjQyNy0uODQ4aC4zMTJ2My4xMjJoLS4yNjhWOC44MzJ6TTIuMjc1IDEwLjc5NWMwLS4yNjcuMDktLjYyNS40NDYtLjYyNXMuNDQ2LjM1Ny40NDYuNjI1LS4wOS42MjQtLjQ0Ni42MjQtLjQ0Ni0uMzEyLS40NDYtLjYyNG0tLjc1OCAwYzAgLjY2OS40OTEgMS4yMDQgMS4yMDQgMS4yMDQuNzE0IDAgMS4yMDUtLjQ5IDEuMjA1LTEuMjA0IDAtLjY3LS40OTEtMS4yMDUtMS4yMDYtMS4yMDUtLjcxMy4wNDUtMS4yMDQuNTM1LTEuMjA0IDEuMjA2bTIuODExLTEuMTE3aC43MTR2LjMxM2MuMTMzLS4yMjQuNDQ2LS4zNTcuNzEzLS4zNTcuNzU4IDAgLjgwMy41MzUuODAzLjg5MnYxLjQyN0g1Ljh2LTEuMDdjMC0uMzEzLjA0My0uNjI0LS4zNTgtLjYyNC0uMjY3IDAtLjQwMS4yMjMtLjQwMS40OVYxMmgtLjcxNVY5LjY3NyIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgIDwvZz4KPC9zdmc+Cg=="
								alt="oneworld logo" class=ow-logo></a>
					<li class="pure-menu-item pure-menu-has-children collapse-on-outside-click menu-big-li" role=presentation
						data-open-class=nav-menu-open><a href=# class="pure-menu-link top-level-link menu-big-a" aria-expanded=false
							role=menuitem>Book</a>
						<div class="pure-menu-children menu-children hf-arrow-nav sf-hidden" role=menu aria-hidden=true></div>
					<li class="pure-menu-item pure-menu-has-children collapse-on-outside-click menu-big-li" role=presentation
						data-open-class=nav-menu-open><a href=# class="pure-menu-link top-level-link menu-big-a"
							aria-controls=menuManage aria-expanded=false role=menuitem>Manage</a>
						<div id=menuManage class="pure-menu-children menu-children hf-arrow-nav sf-hidden" role=menu
							aria-hidden=true></div>
					<li class="pure-menu-item pure-menu-has-children collapse-on-outside-click menu-big-li" role=presentation
						data-open-class=nav-menu-open><a href=# class="pure-menu-link top-level-link menu-big-a" aria-expanded=false
							role=menuitem>Check-in</a>
						<div class="pure-menu-children menu-children hf-arrow-nav sf-hidden" role=menu aria-hidden=true></div>
					<li class="pure-menu-item pure-menu-has-children collapse-on-outside-click menu-big-li" role=presentation
						data-open-class=nav-menu-open><a href=# class="pure-menu-link top-level-link menu-small-a"
							aria-expanded=false role=menuitem>Where we fly</a>
						<div class="pure-menu-children menu-children hf-arrow-nav sf-hidden" role=menu aria-hidden=true></div>
					<li class="pure-menu-item pure-menu-has-children collapse-on-outside-click menu-big-li" role=presentation
						data-open-class=nav-menu-open><a href=# class="pure-menu-link top-level-link menu-small-a"
							aria-expanded=false role=menuitem>Traveling with us</a>
						<div class="pure-menu-children menu-children hf-arrow-nav sf-hidden" role=menu aria-hidden=true></div>
					<li class="pure-menu-item pure-menu-has-children collapse-on-outside-click menu-big-li" role=presentation
						data-open-class=nav-menu-open><a href=# class="pure-menu-link top-level-link menu-small-a"
							aria-expanded=false role=menuitem>Mileage Plan</a>
						<div class="pure-menu-children menu-children hf-arrow-nav sf-hidden" role=menu aria-hidden=true></div>
					<li class="pure-menu-item search-box" role=presentation id=search-box-li>
						<div id=search-wrapper class=search-wrapper>
							<form name=searchForm abineguid=EDF7D17C41A24DF891753FEC12EFA280><input type=text id=txtSearch
									class="search-input st-default-search-input" title=Search-box placeholder=Search aria-label=Search
									autocomplete=off autocorrect=off autocapitalize=off value><a class=mobile-search-icon id=btnSearch
									href=# title=Search-button type=submit><svg version=1.1 xmlns=http://www.w3.org/2000/svg
										class=icon-search viewBox="0 0 512 512">
										<title>search</title>
										<path
											d="m347 238c0-36-12-66-37-91c-25-25-55-37-91-37c-35 0-65 12-90 37c-25 25-38 55-38 91c0 35 13 65 38 90c25 25 55 38 90 38c36 0 66-13 91-38c25-25 37-55 37-90z m147 237c0 10-4 19-11 26c-7 7-16 11-26 11c-10 0-19-4-26-11l-98-98c-34 24-72 36-114 36c-27 0-53-5-78-16c-25-11-46-25-64-43c-18-18-32-39-43-64c-10-25-16-51-16-78c0-28 6-54 16-78c11-25 25-47 43-65c18-18 39-32 64-43c25-10 51-15 78-15c28 0 54 5 79 15c24 11 46 25 64 43c18 18 32 40 43 65c10 24 16 50 16 78c0 42-12 80-36 114l98 98c7 7 11 15 11 25z">
										</path>
									</svg></a></form>
						</div>
				</ul>
			</div>
			<div id=hf-nav-mobile class="hf-nav-mobile menu-mobile sf-hidden">
				<div id=nav-mobile-menu class="pure-menu hidden nav-mobile-menu sf-hidden">
					<div id=SCmerch__Mobile class="sc-merch sf-hidden">
						<style>
							.hf-f .social-icons img,
							.alaska-logo {
								display: inline
							}

							.hf-f .hf-products p {
								padding: 0 15px
							}
						</style>
						<a role=menuitem class="cc-link sf-hidden" id=navMobileBoaCC
							href="https://secure.bankofamerica.com/applynow/initialize-workflow.go?requesttype=C&amp;campaignid=4049863&amp;productoffercode=A2"
							data-omniture-tag=nav:mobilefooter:creditcardUS:applynow>
							<div class="cc-ads cc-us-ad hide-if-canada sf-hidden">
								<style>
									.cc-ads {
										margin: 15px;
										border-radius: 5px;
										max-height: 300px
									}
								</style>

							</div>
						</a>
						<div class="cc-ads cc-ca-ad show-if-canada" style=display:none>
							<style>
								.cc-ca-ad {
									padding: 30px 15px;
									background-color: #0074cb;
									color: #fff;
									font-size: 12px
								}
							</style>
							Apply for an Alaska Airlines card today.
						</div>
					</div>
				</div>
			</div>
			<div class="search-mobile-wrapper search-mobile-wrapper-hidden sf-hidden" id=search-mobile-wrapper></div>
		</div>
		<div class="show-only-in-easybiz menu-easybiz sf-hidden"></div>
		<div class="show-only-in-travelagent menu-travelagent sf-hidden"></div>
	</div>
	<div id=mainContent></div>
	<div class="containerx clearfix">
		<div class=clear></div>
		<div id=JSAdvisory><noscript>
				<div class='advisoryBanner'><strong>Please Enable JavaScript:</strong> You must <a
						href='//www.alaskaair.com/content/about-us/site-info/javascript.aspx'>enable JavaScript</a> in order to use
					alaskaair.com</div>
			</noscript></div>
		<div id=content class=contentMain tabindex=-1>
			<div class="contentWrapNoSubNav pageHeight">
				<div class=infoContentPad>
					<form name=myalaskaair method=post action=MyAlaskaAir.aspx id=myalaskaair>
						<div>
						</div>
						<div>


						</div>
						<div id=FormUserControl>
							<div id=realIdAdvisory>
							</div>
							<div class=infoContentHeader>
								<div id=FormUserControl__preCheckMargin>
									<div id=FormUserControl__myAccountHeaderDiv>
										<h1>Account</h1>
									</div>
									<div id=FormUserControl__myAccountAdvisory style=padding-left:230px>


									</div>
									<div id=FormUserControl__preCheckOptInPanel style=clear:both;display:none;margin-top:-10px>




									</div>
								</div>
							</div>
							<div id=_links class=span-3>
								<table id=FormUserControl__tabMenu role=presentation cellpadding=0 cellspacing=0 border=0
									style=clear:left>
									<tbody>
										<tr id=FormUserControl__tabMenun0>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl00__tabMenuItemPanel class=myAccountHeading
																		role=heading aria-level=2>
																		Mileage Plan
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr title=Overview id=FormUserControl__tabMenun1>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a
																	href=https://www.alaskaair.com/www2/ssl/myalaskaair/MyAlaskaAir.aspx
																	style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl01__tabMenuItemPanel class=sideNavLink>
																		Overview and elite status
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr title="Mileage activity" id=FormUserControl__tabMenun2>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a
																	href=https://www.alaskaair.com/www2/ssl/myalaskaair/MyAlaskaAir.aspx
																	style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl02__tabMenuItemPanel class=sideNav>
																		Mileage activity
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr title="Membership benefits" id=FormUserControl__tabMenun3>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a
																	href=https://www.alaskaair.com/www2/ssl/myalaskaair/MyAlaskaAir.aspx
																	style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl03__tabMenuItemPanel class=sideNavLink>
																		Membership benefits
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr id=FormUserControl__tabMenun4>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl04__tabMenuItemPanel class=myAccountHeading
																		role=heading aria-level=2>
																		Trips
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr title="Upcoming Trips" id=FormUserControl__tabMenun5>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a href=https://www.alaskaair.com/trips
																	style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl05__tabMenuItemPanel class=sideNavLink>
																		Upcoming
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr id=FormUserControl__tabMenun6>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl06__tabMenuItemPanel class=myAccountHeading
																		role=heading aria-level=2>
																		Wallet
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr title="My Wallet Transactions" id=FormUserControl__tabMenun7>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a
																	href=https://www.alaskaair.com/www2/ssl/myalaskaair/MyAlaskaAir.aspx
																	style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl07__tabMenuItemPanel class=sideNavLink>
																		Transactions
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr title="My Wallet Expiration dates" id=FormUserControl__tabMenun8>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a
																	href=https://www.alaskaair.com/www2/ssl/myalaskaair/MyAlaskaAir.aspx
																	style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl08__tabMenuItemPanel class=sideNavLink>
																		Expiration dates
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr id=FormUserControl__tabMenun9>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl09__tabMenuItemPanel class=myAccountHeading
																		role=heading aria-level=2>
																		Discount and companion fare codes
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr title="Valid Discount Codes" id=FormUserControl__tabMenun10>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a
																	href=https://www.alaskaair.com/www2/ssl/myalaskaair/MyAlaskaAir.aspx
																	style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl10__tabMenuItemPanel class=sideNavLink>
																		Valid
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr title="Used Discount Codes" id=FormUserControl__tabMenun11>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a
																	href=https://www.alaskaair.com/www2/ssl/myalaskaair/MyAlaskaAir.aspx
																	style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl11__tabMenuItemPanel class=sideNavLink>
																		Used
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr id=FormUserControl__tabMenun12>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl12__tabMenuItemPanel class=myAccountHeading
																		role=heading aria-level=2>
																		Guest Upgrades
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr title="Valid Upgrades" id=FormUserControl__tabMenun13>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a
																	href=https://www.alaskaair.com/www2/ssl/myalaskaair/MyAlaskaAir.aspx
																	style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl13__tabMenuItemPanel class=sideNavLink>
																		Valid
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr title="Used Upgrades" id=FormUserControl__tabMenun14>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a
																	href=https://www.alaskaair.com/www2/ssl/myalaskaair/MyAlaskaAir.aspx
																	style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl14__tabMenuItemPanel class=sideNavLink>
																		Used
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr title="Expired Upgrades" id=FormUserControl__tabMenun15>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a
																	href=https://www.alaskaair.com/www2/ssl/myalaskaair/MyAlaskaAir.aspx
																	style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl15__tabMenuItemPanel class=sideNavLink>
																		Expired
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr id=FormUserControl__tabMenun16>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl16__tabMenuItemPanel class=myAccountHeading
																		role=heading aria-level=2>
																		Profile and settings
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr title="Personal info and companions" id=FormUserControl__tabMenun17>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a
																	href=https://www.alaskaair.com/www2/ssl/myalaskaair/MyAlaskaAir.aspx
																	style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl17__tabMenuItemPanel class=sideNavLink>
																		Personal info and companions
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr title="Contact, payment, and password" id=FormUserControl__tabMenun18>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a
																	href=https://www.alaskaair.com/www2/ssl/myalaskaair/MyAlaskaAir.aspx
																	style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl18__tabMenuItemPanel class=sideNavLink>
																		Contact, payment, and password
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr title="Travel preferences" id=FormUserControl__tabMenun19>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a
																	href="https://www.alaskaair.com/betaaccount/profile-settings?section=travel-preferences"
																	style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl19__tabMenuItemPanel class=sideNavLink>
																		Travel preferences
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr title=Communications id=FormUserControl__tabMenun20>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a
																	href="https://www.alaskaair.com/betaaccount/profile-settings?section=communications"
																	style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl20__tabMenuItemPanel class=sideNavLink>
																		Communications
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										<tr title=Programs id=FormUserControl__tabMenun21>
											<td>
												<table cellpadding=0 cellspacing=0 border=0 width=100% role=presentation>
													<tbody>
														<tr>
															<td style=white-space:nowrap;width:100%><a
																	href="https://www.alaskaair.com/betaaccount/profile-settings?section=programs"
																	style=text-decoration:none>
																	<div id=FormUserControl__tabMenu_ctl21__tabMenuItemPanel class=sideNavLink>
																		Programs
																	</div>
																</a></td>
														</tr>
												</table>
											</td>
										</tr>
								</table>

							</div>
							<div id=_myAccountMainContent class=infoContentMain
								style=width:675px;border-style:solid;border-color:Black;margin:0px>
								<a name=infoContentMain></a>

								<h2 id=sectionDisplayedHeading>Mileage Plan™ – Mileage activity</h2>




								<div id=FormUserControl__myMileageActivityLinks class=my-account-small-links>

									<a href=https://www.alaskaair.com/MileagePlan/retrocredit/v1/ title="Request mileage credit">Request
										mileage credit</a>
									&nbsp;|&nbsp;
									<a id=FormUserControl__activityExportToExcelLink title="Export to excel (.csv format)"
										href=https://www.alaskaair.com/www2/ssl/myalaskaair/MyAlaskaAir.aspx>Export to excel</a>
									&nbsp;|&nbsp;
									<a href="https://www.alaskaair.com/planbook?awards=yes" title="Book award travel">Book award</a>
									&nbsp;|&nbsp;
									<a href=https://www.alaskaair.com/content/mileage-plan/buy-gift-transfer.aspx
										title="Buy/Share Miles">Buy/Share miles</a>
									&nbsp;|&nbsp;
									<a id=_donateMilesLink href=https://www.alaskaair.com/mileageplan/ssl/Donate/DonateMiles.aspx
										title="Donate miles to charity">Donate miles</a>
									&nbsp;|&nbsp;
									<a href="https://www.mileageplanshopping.com/?source=cl|AKA|ALL|cl||link||Shop|MyAcct|20221001&amp;utm_source=cl&amp;utm_medium=link&amp;utm_campaign=Shop&amp;utm_content=MyAcct&amp;chan=cl&amp;seg=&amp;med=link&amp;strm=&amp;cam=Shop&amp;cont=MyAcct&amp;end=1"
										title="Mileage Plan™ shopping"><span class=hidden>Mileage Plan shopping</span><span
											aria-hidden=true>Mileage Plan™ shopping</span></a>
									<div style=clear:left;padding-top:1px></div>
									<div class=greyDivider></div>

								</div>



								<div id=FormUserControl__multiViewContentPanel>


									<div id=FormUserControl__mileagePlanAccountDetail>

										<div id=FormUserControl__mileagePlanAccountDetail__accountDetailPanel style=padding-left:1px>


											<div id=FormUserControl__mileagePlanAccountDetail__mileagePlanInfo style=clear:left>

												<strong style=display:inline-block;margin-bottom:10px>Member name:</strong>&nbsp;Pongsakon
												Kananusorn MVP Gold 75K<br>
												<strong style=display:inline-block;margin-bottom:10px>Mileage Plan
													number:</strong>&nbsp;289953834
												<br>
												<strong>Available miles:</strong>&nbsp;0
											</div>

											<div id=FormUserControl__mileagePlanAccountDetail__mileagePlanActivity
												style=clear:left;padding-top:15px>

												<style class=sf-hidden>
													#paging {
														text-align: right;
														clear: both;
														direction: rtl;
														width: 675px
													}

													#paging table {
														direction: ltr
													}

													#paging a,
													#paging a:visited {
														color: blue;
														text-decoration: none
													}

													#paging span {
														font-weight: bold
													}
												</style>

												<div id=FormUserControl__mileagePlanAccountDetail__mileagePlanActivity__activityGrouping>
													<div id=FormUserControl__mileagePlanAccountDetail__mileagePlanActivity__activityFilterPanel
														class="clearfix append-bottom">

														<strong class="left vertical-align-with-input">Sort by:</strong>
														<div class=left style=padding-left:5px>
															<label for=FormUserControl__mileagePlanAccountDetail__mileagePlanActivity__partnerTypeList
																class=hidden>Select activity type.</label>
															<select
																name=FormUserControl$_mileagePlanAccountDetail$_mileagePlanActivity$_partnerTypeList
																id=FormUserControl__mileagePlanAccountDetail__mileagePlanActivity__partnerTypeList
																class=form-control style=width:160px>
																<option value=All selected>All activity</option>
																<option value=Airline>Air</option>
																<option value=CarRental>Car</option>
																<option value=Financial>Financial partners</option>
																<option value=Hotel>Hotel</option>
																<option value=Specialty>Specialty</option>
																<option value=Rail>Rail</option>
																<option value=Telecom>Telecom</option>
																<option value=Other>Other</option>

															</select>
														</div>
														<div class=left style=padding-left:15px>
															<label for=FormUserControl__mileagePlanAccountDetail__mileagePlanActivity__sortOptionList
																class=hidden>Select sort by date or activity type.</label>
															<select
																name=FormUserControl$_mileagePlanAccountDetail$_mileagePlanActivity$_sortOptionList
																id=FormUserControl__mileagePlanAccountDetail__mileagePlanActivity__sortOptionList
																class=form-control style=width:135px>
																<option value=ActivityDate selected>Activity date</option>
																<option value=ActivityType>Activity type</option>

															</select>
														</div>
														<div class=left style=padding-left:15px>
															<label
																for=FormUserControl__mileagePlanAccountDetail__mileagePlanActivity__transactionPeriodFilterList
																class=hidden>Select time period to sort by.</label>
															<select
																name=FormUserControl$_mileagePlanAccountDetail$_mileagePlanActivity$_transactionPeriodFilterList
																id=FormUserControl__mileagePlanAccountDetail__mileagePlanActivity__transactionPeriodFilterList
																class=form-control style=width:150px>
																<option value=ThreeMonths selected>2022</option>
																<option value=SixMonths>Past 6 months</option>
																<option value=NineMonths>Past 9 months</option>
																<option value=TwelveMonths>Past 12 months</option>
																<option value=TwentyFourMonths>Past 24 months</option>

															</select>
														</div>
														<input type=submit
															name=FormUserControl$_mileagePlanAccountDetail$_mileagePlanActivity$_sortButton
															value=APPLY id=FormUserControl__mileagePlanAccountDetail__mileagePlanActivity__sortButton
															class="btn btn-primary pull-right" style=border-style:None;margin:0>

													</div>
													<div id=paging></div>
													<div id=paging>
														<table border=0>
															<tbody>
																<tr>
																	<td><a href=https://www.alaskaair.com/www2/ssl/myalaskaair/MyAlaskaAir.aspx>1</a>
																	<td>,&nbsp;
																	<td><span>2</span></td>
																</tr>
														</table>
													</div>
													<div>
														<table class="default clear" cellspacing=0 rules=all border=0
															id=FormUserControl__mileagePlanAccountDetail__mileagePlanActivity__mpActivityGrid
															style=border-width:0px;border-collapse:collapse>
															<caption>
																<span class=sr-only>Mileage activity</span>
															<tbody>
																<tr class="MyMileageActivityPagingRow sf-hidden" align=right>

																<tr>
																	<th align=left valign=bottom scope=col>Activity date
																	<th align=left valign=bottom scope=col>Activity type
																	<th class=rightaligned align=left valign=bottom scope=col>Status
																	<th class=rightaligned align=right valign=bottom scope=col>Miles
																	<th class=rightaligned align=right valign=bottom scope=col>Bonus
																	<th class=rightaligned align=right valign=bottom scope=col>Total</th>
																<tr>
																	<td class=smallText align=left valign=top style=width:1%>06/24/2022
																	<td class=smallText align=left valign=top>
																		ALASKA AIRLINES<br>Flight 853 SEA HNL
																	<td class=rightaligned align=right valign=top>
																		Credited<br>
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>2,677
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>3,346
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>6,023</td>
																<tr class="altrow td">
																	<td class=smallText align=left valign=top style=width:1%>06/24/2022
																	<td class=smallText align=left valign=top>
																		ALASKA AIRLINES<br>Flight 25 BOS SEA
																	<td class=rightaligned align=right valign=top>
																		Credited<br>
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>2,496
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>3,120
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>5,616</td>
																<tr>
																	<td class=smallText align=left valign=top style=width:1%>06/19/2022
																	<td class=smallText align=left valign=top>
																		ALASKA AIRLINES<br>Flight 24 SEA BOS
																	<td class=rightaligned align=right valign=top>
																		Credited<br>
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>2,496
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>3,120
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>5,616</td>
																<tr class="altrow td">
																	<td class=smallText align=left valign=top style=width:1%>06/19/2022
																	<td class=smallText align=left valign=top>
																		ALASKA AIRLINES<br>Flight 896 HNL SEA
																	<td class=rightaligned align=right valign=top>
																		Credited<br>
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>2,677
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>3,346
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>6,023</td>
																<tr>
																	<td class=smallText align=left valign=top style=width:1%>05/25/2022
																	<td class=smallText align=left valign=top>
																		ALASKA AIRLINES<br>Flight 145 SEA HNL
																	<td class=rightaligned align=right valign=top>
																		Credited<br>
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>2,677
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>3,346
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>6,023</td>
																<tr class="altrow td">
																	<td class=smallText align=left valign=top style=width:1%>05/25/2022
																	<td class=smallText align=left valign=top>
																		ALASKA AIRLINES<br>Flight 9 MCO SEA
																	<td class=rightaligned align=right valign=top>
																		Credited<br>
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>2,421
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>3,193
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>5,747</td>
																<tr>
																	<td class=smallText align=left valign=top style=width:1%>05/19/2022
																	<td class=smallText align=left valign=top>
																		ALASKA AIRLINES<br>Flight 10 SEA MCO
																	<td class=rightaligned align=right valign=top>
																		Credited<br>
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>2,421
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>3,193
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>5,747</td>
																<tr class="altrow td">
																	<td class=smallText align=left valign=top style=width:1%>05/19/2022
																	<td class=smallText align=left valign=top>
																		ALASKA AIRLINES<br>Flight 896 HNL SEA
																	<td class=rightaligned align=right valign=top>
																		Credited<br>
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>2,677
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>3,346
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>6,023</td>
																<tr>
																	<td class=smallText align=left valign=top style=width:1%>04/20/2022
																	<td class=smallText align=left valign=top>
																		ALASKA AIRLINES<br>Flight 817 LAX HNL
																	<td class=rightaligned align=right valign=top>
																		Credited<br>
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>2,556
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>3,195
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>5,751</td>
																<tr class="altrow td">
																	<td class=smallText align=left valign=top style=width:1%>04/20/2022
																	<td class=smallText align=left valign=top>
																		AMERICAN AIRLINES<br>Flight 2413 AUS LAX
																	<td class=rightaligned align=right valign=top>
																		Credited<br>
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>1,242
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>1,553
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>2,795</td>
																<tr>
																	<td class=smallText align=left valign=top style=width:1%>04/12/2022
																	<td class=smallText align=left valign=top>
																		ALASKA AIRLINES<br>Flight 1144 SEA AUS
																	<td class=rightaligned align=right valign=top>
																		Credited<br>
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>1,770
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>2,213
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>3,983</td>
																<tr class="altrow td">
																	<td class=smallText align=left valign=top style=width:1%>04/12/2022
																	<td class=smallText align=left valign=top>
																		ALASKA AIRLINES<br>Flight 896 HNL SEA
																	<td class=rightaligned align=right valign=top>
																		Credited<br>
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>2,677
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>3,346
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>6,023</td>
																<tr>
																	<td class=smallText align=left valign=top style=width:1%>03/25/2022
																	<td class=smallText align=left valign=top>
																		ALASKA AIRLINES<br>Flight 25 BOS SEA
																	<td class=rightaligned align=right valign=top>
																		Credited<br>
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>2,496
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>3,120
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>5,616</td>
																<tr class="altrow td">
																	<td class=smallText align=left valign=top style=width:1%>03/22/2022
																	<td class=smallText align=left valign=top>
																		ALASKA AIRLINES<br>Flight 24 SEA BOS
																	<td class=rightaligned align=right valign=top>
																		Credited<br>
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>2,496
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>3,120
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>5,616</td>
																<tr>
																	<td class=smallText align=left valign=top style=width:1%>02/03/2022
																	<td class=smallText align=left valign=top>
																		ALASKA AIRLINES<br>Flight 833 PDX HNL
																	<td class=rightaligned align=right valign=top>
																		Credited<br>
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>2,603
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>3,254
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>5,857</td>
																<tr class="altrow td">
																	<td class=smallText align=left valign=top style=width:1%>02/03/2022
																	<td class=smallText align=left valign=top>
																		ALASKA AIRLINES<br>Flight 1332 LAS PDX
																	<td class=rightaligned align=right valign=top>
																		Credited<br>
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>763
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>954
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>1,717</td>
																<tr>
																	<td class=smallText align=left valign=top style=width:1%>01/27/2022
																	<td class=smallText align=left valign=top>
																		ALASKA AIRLINES<br>Flight 1116 SEA LAS
																	<td class=rightaligned align=right valign=top>
																		Credited<br>
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>867
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>1,084
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>1,951</td>
																<tr class="altrow td">
																	<td class=smallText align=left valign=top style=width:1%>01/27/2022
																	<td class=smallText align=left valign=top>
																		ALASKA AIRLINES<br>Flight 896 HNL SEA
																	<td class=rightaligned align=right valign=top>
																		Credited<br>
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>2,677
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>3,346
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>6,023</td>
																<tr>
																	<td class=smallText align=left valign=top style=width:1%>01/13/2022
																	<td class=smallText align=left valign=top>
																		ALASKA AIRLINES<br>Flight 769 JFK SFO
																	<td class=rightaligned align=right valign=top>
																		Credited<br>
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>2,586
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>3,233
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>5,819</td>
																<tr class="altrow td">
																	<td class=smallText align=left valign=top style=width:1%>01/09/2022
																	<td class=smallText align=left valign=top>
																		ALASKA AIRLINES<br>Flight 18 SEA JFK
																	<td class=rightaligned align=right valign=top>
																		Credited<br>
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>2,421
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>3,026
																	<td class=rightaligned align=right valign=top style=white-space:nowrap>5,447</td>
																</tr>
														</table>
													</div>
												</div>
												<span
													id=FormUserControl__mileagePlanAccountDetail__mileagePlanActivity__myMileageActivityFooterNotes
													class=smallText>Note: Depending on
													the partnership, activity will appear on your account 30-60 days after you have earned miles.
													If you do not see activity after 60 days, contact Mileage Plan.</span>

											</div>

										</div>
									</div>


								</div>



								<div style=height:10px;line-height:10px;padding-top:10px;clear:both></div>
								<div id=UpgradeHowTo style=display:none>


									MVP® Gold Guest Upgrades are electronic upgrade coupons given to MVP® Gold members to upgrade friends
									or family members who are not traveling with them, or for their own use for immediate upgrade when not
									purchasing a qualifying fare.



									To use your MVP® Gold Guest Upgrade codes, either or select a reservation from your My Trips. You'll
									find the Guest Upgrade link at the top of Your Confirmed Reservation page.
								</div>

								<div id=newMemberModal style=display:none>


									<div id=creditCardDeal class=sf-hidden>
									</div>
								</div>
							</div>


						</div>




					</form>
					<div class=clear></div>
				</div>
			</div>

		</div>
	</div>
	<div id=footerContainerDiv class="hf hf-f signed-in-true" no-print-web-checkin=true>
		<div class="hf-products show-only-in-public">
			<div class=pure-g>
				<div class="pure-u-1-2 pure-u-md-1-4"><a
						href="https://www.alaskaair.com/deals/EmailDealsSignup?lid=footer1:emailDeals&amp;int=AS_NAV_FTR1_-prodID:EmailDeals">
						<div class=text-center><img alt=email class=footer-product-icons
								src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPScxLjEnIA0KICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgDQogICAgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIGNsYXNzPSJpY29uLWVtYWlsIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSdwcmVzZXJ2ZSc+DQoNCiAgICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJtNTEgNDEybDQxMCAwIDAtMjkxLTQxMCAwYzAgMCAwIDI5MSAwIDI5MXogbTcwLTMwbDk1LTEwNCAxOCAxMyAwIDFjNyA0IDE0IDcgMjIgNyA4IDAgMTYtMiAyMi03bDEtMSAxNy0xMyA5NiAxMDMtMjcxIDB6IG0zMTAgMGwtOSAwIDEtMS0xMDgtMTE2IDExNi04NyAwIDIwNHogbS0xMy0yMzJsLTE1NyAxMThjLTMgMi03IDItMTAgMGwtMTU3LTExOHogbS0zMzcgMjhsMTE2IDg3LTEwOCAxMTYgMSAxLTkgMHoiIC8+DQo8L3N2Zz4=">
							<h4 class=secondary aria-level=2>Email deals</h4>
							<p>The latest, lowest fares in your inbox every week.</p><span class=btn-link>Sign up now ?<span
									class=sr-only>for email flight deals</span></span>
						</div>
					</a></div>
				<div class="pure-u-1-2 pure-u-md-1-4"><a href=http://survey.alaskalistens.com/#/survey1
						data-omniture-tag=footer:alaskaListens aria-describedby=stepoutLabel>
						<div class=text-center><img alt="alaska listens" class=footer-product-icons
								src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPScxLjEnIA0KICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgDQogICAgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIGNsYXNzPSJpY29uLWFzLWxpc3RlbnMiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9J3ByZXNlcnZlJz4NCiAgICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJtMTczIDExNWMtNzktNS0xNDcgNDAtMTUwIDk3LTUgNjkgNDUgMTE0IDExMCAxMjkgNCAxIDggMyAxMSA3IDcgOCAxNSAyNi04IDQ5IDY5LTI0IDE2NC02MiAxNzAtMTU4IDUtNzUtNTQtMTE5LTEzMy0xMjR6IG0xODYgNjNjMjkgMCA1NiA5IDc3IDI1IDE4IDE1IDI5IDMzIDI5IDUyIDEgMzgtMTkgNTYtODAgNzItMTIgNC0yNyAxNi0zMiAyMi02IDctMTAgMTYtMTIgMjUtMjEtNy00MS0xNi01OC0yNy0yNS0xOC0zOS00MS00MS03Mi00LTY1IDUzLTkzIDEwNy05NiA0IDAgNy0xIDEwLTFtMC0yNmMtMyAwLTcgMC0xMSAwLTc5IDYtMTM3IDUwLTEzMiAxMjUgNyA5NiAxMDEgMTE2IDE2OSAxMzktMjctMjEtMTktNDItMTEtNTAgMy00IDEzLTEyIDE3LTEzIDYwLTE2IDEwMi0zOSAxMDAtOTgtMS01NS01OC0xMDMtMTMyLTEwM3oiPjwvcGF0aD4NCjwvc3ZnPg==">
							<h4 class=secondary aria-level=2>Alaska listens <span class=sr-only>This indicates a link to an external
									site that may not follow the same accessibility or privacy policies as Alaska Airlines. By selecting a
									partner link you agree to share your data with these sites.</span></h4>
							<p>Tell us about your recent trip.</p><span class=btn-link data-omniture-tag=footer:alaskaListens>Give
								feedback<span class=sr-only>This indicates a link to an external site that may not follow the same
									accessibility or privacy policies as Alaska Airlines. By selecting a partner link you agree to share
									your data with these sites.</span><span
									title="This indicates a link to an external site that may not follow the same accessibility or privacy policies as Alaska Airlines. By selecting a partner link you agree to share your data with these sites.">
									<svg class=step-out-footer-link xmlns=http://www.w3.org/2000/svg viewBox="0 0 512 512">
										<g>
											<path
												d="m397 512l-360 0c-21 0-37-17-37-37l0-361c0-20 16-37 37-37l119 0c20 0 36 17 36 37 0 20-16 37-36 37l-82 0 0 287 287 0 0-82c0-20 16-36 36-36 21 0 37 16 37 36l0 119c0 20-16 37-37 37z m78-259c-20 0-37-16-37-36l0-143-142 0c-20 0-36-17-36-37 0-20 16-37 36-37l179 0c20 0 37 17 37 37l0 180c0 20-16 36-37 36z m-178 5c-9 0-18-4-25-11-15-14-15-37-1-51l177-184c14-14 37-15 52-1 15 15 15 38 1 52l-177 184c-8 7-17 11-27 11z">
											</path>
										</g>
									</svg></span><span class=sr-only>about your recent trip</span></span>
						</div>
					</a></div>
				<div class="pure-u-1-2 pure-u-md-1-4 hf-secondrow"><a
						href="https://www.alaskaair.com/content/mobile/mobile-apps?lid=footer3&amp;int=AS_NAV_FTR3_-prodID:Mobile">
						<div class=text-center><img alt="mobile phone" class=footer-product-icons
								src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPScxLjEnIA0KICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgDQogICAgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIGNsYXNzPSJpY29uLW1vYmlsZSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0ncHJlc2VydmUnPg0KICAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Im0zMjQgNTFsLTEzNiAwYy0yNyAwLTUwIDIzLTUwIDUxbDAgMzA4YzAgMjggMjMgNTEgNTAgNTFsMTM2IDBjMjcgMCA1MC0yMyA1MC01MWwwLTMwOGMwLTI4LTIzLTUxLTUwLTUxeiBtLTY4IDM4M2MtMTMgMC0yNC0xMS0yNC0yNCAwLTE0IDExLTI0IDI0LTI0IDEzIDAgMjQgMTAgMjQgMjQgMCAxMy0xMSAyNC0yNCAyNHogbTg3LTY5bC0xNzQgMCAwLTI1OCAxNzQgMGMwIDAgMCAyNTggMCAyNTh6Ij48L3BhdGg+DQo8L3N2Zz4=">
							<h4 class=secondary aria-level=2>Mobile</h4>
							<p>For iPhone and Android.</p><span class=btn-link>Get the app ?<span class=sr-only>Alaska Airlines mobile
									app</span></span>
						</div>
					</a></div>
				<div style=display:none></div>
				<div id=SCmerch__Footer class="pure-u-1-2 pure-u-md-1-4 hf-secondrow">
					<a data-omniture-tag=footer:creditCard-US target=_blank rel="noopener noreferrer"
						href="https://secure.bankofamerica.com/applynow/initialize-workflow.go?requesttype=C&amp;campaignid=4049870&amp;productoffercode=A5"
						aria-describedby=stepoutLabel>
						<div class=text-center>
							<img alt="credit card" class=footer-product-icons
								src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPScxLjEnIA0KICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgDQogICAgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIGNsYXNzPSJpY29uLWNyZWRpdCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0ncHJlc2VydmUnPg0KICAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Im00NzEgMTI2Yy02LTctMTQtMTAtMjQtMTBsLTM0MSAwYy0xMCAwLTE4IDMtMjQgMTAtNyA2LTEwIDE0LTEwIDI0bDAgMjU5YzAgOSAzIDE4IDEwIDI0IDYgNyAxNCAxMCAyNCAxMGwzNDEgMGMxMCAwIDE4LTMgMjQtMTAgNy02IDEwLTE1IDEwLTI0bDAtMjU5YzAtMTAtMy0xOC0xMC0yNHogbS0xNyAyODNjMCAyLTEgNC0yIDUtMSAxLTMgMi01IDJsLTM0MSAwYy0yIDAtNC0xLTUtMi0xLTEtMi0zLTItNWwwLTEzMCAzNTUgMHogbTAtMjEybC0zNTUgMCAwLTQ3YzAtMiAxLTQgMi01IDEtMSAzLTIgNS0ybDM0MSAwYzIgMCA0IDEgNSAyIDEgMSAyIDMgMiA1IDAgMCAwIDQ3IDAgNDd6IG0tMzI4IDE2NGw1NSAwIDAgMjgtNTUgMHogbTgyIDBsODIgMCAwIDI4LTgyIDB6Ij48L3BhdGg+DQo8L3N2Zz4=">
							<h4 class=secondary aria-level=2>
								Credit card<span class=sr-only>This indicates a link to an external site that may not follow the same
									accessibility or privacy policies as Alaska Airlines. By selecting a partner link you agree to share
									your data with these sites.</span>
							</h4>
							<p>
								For a limited time, get a 50,000 bonus mile offer.
							</p>
							<span class=btn-link aria-describedby=stepoutLabel data-omniture-tag=footer:creditcard:applynow_US>
								Apply now
								<span class=sr-only>This indicates a link to an external site that may not follow the same accessibility
									or privacy policies as Alaska Airlines. By selecting a partner link you agree to share your data with
									these sites.</span>
								<span
									title="This indicates a link to an external site that may not follow the same accessibility or privacy policies as Alaska Airlines. By selecting a partner link you agree to share your data with these sites.">
									<svg class=step-out-footer-link xmlns=http://www.w3.org/2000/svg viewBox="0 0 512 512">
										<g>
											<path
												d="m397 512l-360 0c-21 0-37-17-37-37l0-361c0-20 16-37 37-37l119 0c20 0 36 17 36 37 0 20-16 37-36 37l-82 0 0 287 287 0 0-82c0-20 16-36 36-36 21 0 37 16 37 36l0 119c0 20-16 37-37 37z m78-259c-20 0-37-16-37-36l0-143-142 0c-20 0-36-17-36-37 0-20 16-37 36-37l179 0c20 0 37 17 37 37l0 180c0 20-16 36-37 36z m-178 5c-9 0-18-4-25-11-15-14-15-37-1-51l177-184c14-14 37-15 52-1 15 15 15 38 1 52l-177 184c-8 7-17 11-27 11z">
											</path>
										</g>
									</svg>
								</span>
								<span class=sr-only>
									for an Alaska Airlines credit card
								</span>
							</span>
						</div>
					</a>
				</div>
				<div style=display:none></div>
			</div>
		</div>
		<footer class=alaska-footer>
			<div class="pure-g show-only-in-public">
				<div class="pure-u-1 pure-u-md-1-4">
					<h5 class="footer-headlines hf-collapsed" aria-level=2><span class=hf-hide-sm>About Alaska</span><a
							class="hf-collapsible hf-show-sm sf-hidden" href=#collapse0>About Alaska<svg
								class="icon-caret-down-two static-hide expanded-show" viewBox="0 0 512 512">
								<path
									d="m402 201c0 5-2 9-5 13l-128 128c-4 4-8 5-13 5c-5 0-9-1-13-5l-128-128c-3-4-5-8-5-13c0-5 2-9 5-13c4-3 8-5 13-5l256 0c5 0 9 2 13 5c3 4 5 8 5 13z">
								</path>
							</svg><svg class="icon-caret-right static-hide expanded-hide" viewBox="0 0 512 512">
								<path
									d="m329 256c0 5-2 9-5 13l-128 128c-4 3-8 5-13 5c-5 0-9-2-13-5c-4-4-5-8-5-13l0-256c0-5 1-9 5-13c4-3 8-5 13-5c5 0 9 2 13 5l128 128c3 4 5 8 5 13z">
								</path>
							</svg></a></h5>
					<div id=collapse0 class="panel-collapsible hf-collapse">
						<ul class=footerLists>
							<li class=undefined><a href=https://www.alaskaair.com/content/about-us>Who we are</a>
							<li class=undefined><a
									href="https://alaskaair.jobs/?vs=4558&amp;utm_source=AlaskaAir.com-DE&amp;utm_medium=Other&amp;utm_campaign=AlaskaAir.com"
									data-omniture-tag=footer:careers>Careers <span class=sr-only>This indicates a link to an external site
										that may not follow the same accessibility or privacy policies as Alaska Airlines. By selecting a
										partner link you agree to share your data with these sites.</span><span
										title="This indicates a link to an external site that may not follow the same accessibility or privacy policies as Alaska Airlines. By selecting a partner link you agree to share your data with these sites.">
										<svg class=step-out-footer-link xmlns=http://www.w3.org/2000/svg viewBox="0 0 512 512">
											<g>
												<path
													d="m397 512l-360 0c-21 0-37-17-37-37l0-361c0-20 16-37 37-37l119 0c20 0 36 17 36 37 0 20-16 37-36 37l-82 0 0 287 287 0 0-82c0-20 16-36 36-36 21 0 37 16 37 36l0 119c0 20-16 37-37 37z m78-259c-20 0-37-16-37-36l0-143-142 0c-20 0-36-17-36-37 0-20 16-37 36-37l179 0c20 0 37 17 37 37l0 180c0 20-16 36-37 36z m-178 5c-9 0-18-4-25-11-15-14-15-37-1-51l177-184c14-14 37-15 52-1 15 15 15 38 1 52l-177 184c-8 7-17 11-27 11z">
												</path>
											</g>
										</svg></span></a>
							<li class=undefined><a href=https://newsroom.alaskaair.com />Newsroom <span class=sr-only>This indicates a
									link to an external site that may not follow the same accessibility or privacy policies as Alaska
									Airlines. By selecting a partner link you agree to share your data with these sites.</span><span
									title="This indicates a link to an external site that may not follow the same accessibility or privacy policies as Alaska Airlines. By selecting a partner link you agree to share your data with these sites.">
									<svg class=step-out-footer-link xmlns=http://www.w3.org/2000/svg viewBox="0 0 512 512">
										<g>
											<path
												d="m397 512l-360 0c-21 0-37-17-37-37l0-361c0-20 16-37 37-37l119 0c20 0 36 17 36 37 0 20-16 37-36 37l-82 0 0 287 287 0 0-82c0-20 16-36 36-36 21 0 37 16 37 36l0 119c0 20-16 37-37 37z m78-259c-20 0-37-16-37-36l0-143-142 0c-20 0-36-17-36-37 0-20 16-37 36-37l179 0c20 0 37 17 37 37l0 180c0 20-16 36-37 36z m-178 5c-9 0-18-4-25-11-15-14-15-37-1-51l177-184c14-14 37-15 52-1 15 15 15 38 1 52l-177 184c-8 7-17 11-27 11z">
											</path>
										</g>
									</svg></span></a>
							<li class=undefined><a href=http://investor.alaskaair.com/
									data-omniture-tag=footer:investor-relations>Investor relations <span class=sr-only>This indicates a
										link to an external site that may not follow the same accessibility or privacy policies as Alaska
										Airlines. By selecting a partner link you agree to share your data with these sites.</span><span
										title="This indicates a link to an external site that may not follow the same accessibility or privacy policies as Alaska Airlines. By selecting a partner link you agree to share your data with these sites.">
										<svg class=step-out-footer-link xmlns=http://www.w3.org/2000/svg viewBox="0 0 512 512">
											<g>
												<path
													d="m397 512l-360 0c-21 0-37-17-37-37l0-361c0-20 16-37 37-37l119 0c20 0 36 17 36 37 0 20-16 37-36 37l-82 0 0 287 287 0 0-82c0-20 16-36 36-36 21 0 37 16 37 36l0 119c0 20-16 37-37 37z m78-259c-20 0-37-16-37-36l0-143-142 0c-20 0-36-17-36-37 0-20 16-37 36-37l179 0c20 0 37 17 37 37l0 180c0 20-16 36-37 36z m-178 5c-9 0-18-4-25-11-15-14-15-37-1-51l177-184c14-14 37-15 52-1 15 15 15 38 1 52l-177 184c-8 7-17 11-27 11z">
												</path>
											</g>
										</svg></span></a>
							<li class=undefined><a
									href="https://www.alaskaair.com/content/legal/consumer-notices?lid=footer:legal">Legal</a>
							<li class=undefined><a
									href="https://www.alaskaair.com/content/legal/contract-of-carriage?lid=footer:contractCarriage">Contract
									of carriage</a>
							<li class=undefined><b><a
										href="https://www.alaskaair.com/content/legal/privacy-policy?lid=footer:privacyPolicy">Privacy
										notice</a></b>
						</ul>
					</div>
				</div>
				<div class="pure-u-1 pure-u-md-1-4">
					<h5 class="footer-headlines hf-collapsed" aria-level=2><span class=hf-hide-sm>Customer Service</span><a
							class="hf-collapsible hf-show-sm sf-hidden" href=#collapse1>Customer Service<svg
								class="icon-caret-down-two static-hide expanded-show" viewBox="0 0 512 512">
								<path
									d="m402 201c0 5-2 9-5 13l-128 128c-4 4-8 5-13 5c-5 0-9-1-13-5l-128-128c-3-4-5-8-5-13c0-5 2-9 5-13c4-3 8-5 13-5l256 0c5 0 9 2 13 5c3 4 5 8 5 13z">
								</path>
							</svg><svg class="icon-caret-right static-hide expanded-hide" viewBox="0 0 512 512">
								<path
									d="m329 256c0 5-2 9-5 13l-128 128c-4 3-8 5-13 5c-5 0-9-2-13-5c-4-4-5-8-5-13l0-256c0-5 1-9 5-13c4-3 8-5 13-5c5 0 9 2 13 5l128 128c3 4 5 8 5 13z">
								</path>
							</svg></a></h5>
					<div id=collapse1 class="panel-collapsible hf-collapse">
						<ul class=footerLists>
							<li class=hide-if-not-as-host><a
									href="https://www.alaskaair.com/content/about-us/help-contact?lid=footer:contactUs">Help center</a>
							<li class=undefined><a href="https://www.alaskaair.com/feedback?lid=footer:feedback">Feedback</a>
							<li class=undefined><a
									href="https://www.alaskaair.com/content/advisories/travel-advisories?lid=footer:advisories">Travel
									advisories</a>
							<li class=undefined><a
									href="https://www.alaskaair.com/content/about-us/customer-commitment/customer-commitment-overview?lid=footer:customerCommitment">Customer
									commitment</a>
							<li class=undefined><a
									href=https://www.alaskaair.com/content/legal/air-passenger-protection-regulations-canada>Canada - air
									travel rights</a>
							<li class=undefined><a
									href="https://www.alaskaair.com/content/about-us/customer-commitment/customer-commitment-extended-delays?lid=footer:tarmacDelayPlan">Tarmac
									delay plan</a>
							<li class=undefined><a href="https://www.alaskaair.com/content/site-map?lid=footer:siteMap">Site map</a>
						</ul>
					</div>
				</div>
				<div class="pure-u-1 pure-u-md-1-4">
					<h5 class="footer-headlines hf-collapsed" aria-level=2><span class=hf-hide-sm>Products and services</span><a
							class="hf-collapsible hf-show-sm sf-hidden" href=#collapse2>Products and services<svg
								class="icon-caret-down-two static-hide expanded-show" viewBox="0 0 512 512">
								<path
									d="m402 201c0 5-2 9-5 13l-128 128c-4 4-8 5-13 5c-5 0-9-1-13-5l-128-128c-3-4-5-8-5-13c0-5 2-9 5-13c4-3 8-5 13-5l256 0c5 0 9 2 13 5c3 4 5 8 5 13z">
								</path>
							</svg><svg class="icon-caret-right static-hide expanded-hide" viewBox="0 0 512 512">
								<path
									d="m329 256c0 5-2 9-5 13l-128 128c-4 3-8 5-13 5c-5 0-9-2-13-5c-4-4-5-8-5-13l0-256c0-5 1-9 5-13c4-3 8-5 13-5c5 0 9 2 13 5l128 128c3 4 5 8 5 13z">
								</path>
							</svg></a></h5>
					<div id=collapse2 class="panel-collapsible hf-collapse">
						<ul class=footerLists>
							<li class=undefined><a
									href="https://www.alaskaair.com/content/travel-info/optional-services-fees?lid=footer:optionalServices">Optional
									services and fees</a>
							<li class=undefined><a
									href="https://www.alaskaair.com/content/corporate-travel?lid=footer:CorporateTravel&amp;int=AS_NAV_Footer_-prodID:CorporateTravel">Corporate
									travel</a>
							<li class=undefined><a
									href="https://easybiz.alaskaair.com/signin?lid=footer:easyBiz&amp;int=AS_NAV_Footer_-prodID:EasyBiz">EasyBiz</a>
							<li class=undefined><a href="https://www.alaskaair.com/travel-agent/logon?lid=footer:travelAgent">Travel
									agents</a>
							<li class=undefined><a
									href="https://www.alaskacargo.com/?lid=footer:cargo&amp;int=AS_NAV_Footer_-prodID:Cargo">Cargo <span
										class=sr-only>This indicates a link to an external site that may not follow the same accessibility
										or privacy policies as Alaska Airlines. By selecting a partner link you agree to share your data
										with these sites.</span><span
										title="This indicates a link to an external site that may not follow the same accessibility or privacy policies as Alaska Airlines. By selecting a partner link you agree to share your data with these sites.">
										<svg class=step-out-footer-link xmlns=http://www.w3.org/2000/svg viewBox="0 0 512 512">
											<g>
												<path
													d="m397 512l-360 0c-21 0-37-17-37-37l0-361c0-20 16-37 37-37l119 0c20 0 36 17 36 37 0 20-16 37-36 37l-82 0 0 287 287 0 0-82c0-20 16-36 36-36 21 0 37 16 37 36l0 119c0 20-16 37-37 37z m78-259c-20 0-37-16-37-36l0-143-142 0c-20 0-36-17-36-37 0-20 16-37 36-37l179 0c20 0 37 17 37 37l0 180c0 20-16 36-37 36z m-178 5c-9 0-18-4-25-11-15-14-15-37-1-51l177-184c14-14 37-15 52-1 15 15 15 38 1 52l-177 184c-8 7-17 11-27 11z">
												</path>
											</g>
										</svg></span></a>
							<li class=undefined><a
									href="https://www.alaskaair.com/content/gifts-and-products/gift-cards-certificates/gift-card-overview?lid=footer:giftCerts&amp;int=AS_NAV_Footer_-prodID:GiftCertificates">Gift
									certificates</a>
							<li class=undefined><a
									href="https://www.alaskaair.com/content/gifts-and-products/travel-insurance?lid=footer:TripProtection&amp;int=AS_NAV_Footer_-prodID:Ancillary">Travel
									insurance</a>
						</ul>
					</div>
				</div>
				<div class="pure-u-1 pure-u-md-1-4">
					<h5 class="footer-headlines hf-collapsed" aria-level=2 aria-describedby=stepoutLabel>Follow us <span
							class=sr-only>This indicates a link to an external site that may not follow the same accessibility or
							privacy policies as Alaska Airlines. By selecting a partner link you agree to share your data with these
							sites.</span><span
							title="This indicates a link to an external site that may not follow the same accessibility or privacy policies as Alaska Airlines. By selecting a partner link you agree to share your data with these sites.">
							<svg class=step-out-footer-link xmlns=http://www.w3.org/2000/svg viewBox="0 0 512 512">
								<g>
									<path
										d="m397 512l-360 0c-21 0-37-17-37-37l0-361c0-20 16-37 37-37l119 0c20 0 36 17 36 37 0 20-16 37-36 37l-82 0 0 287 287 0 0-82c0-20 16-36 36-36 21 0 37 16 37 36l0 119c0 20-16 37-37 37z m78-259c-20 0-37-16-37-36l0-143-142 0c-20 0-36-17-36-37 0-20 16-37 36-37l179 0c20 0 37 17 37 37l0 180c0 20-16 36-37 36z m-178 5c-9 0-18-4-25-11-15-14-15-37-1-51l177-184c14-14 37-15 52-1 15 15 15 38 1 52l-177 184c-8 7-17 11-27 11z">
									</path>
								</g>
							</svg></span></h5>
					<ul class=footerLists>
						<li class=undefined>
							<div class=social-icons><a href=https://www.facebook.com/alaskaairlines aria-describedby=stepoutLabel
									data-omniture-tag=footer:facebook id=navFacebook><img height=24px width=24px
										alt="Follow us on Facebook"
										src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPScxLjEnIA0KICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIA0KICB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgY2xhc3M9J2ljb24tZmFjZWJvb2snIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9J3ByZXNlcnZlJz4NCiAgPHBhdGggZmlsbD0nI0ZGRkZGRicgZD0nbTI5NCAxNzFsMC00MmMwLTYgMC0xMSAxLTE1IDAtMyAyLTcgNC0xMCAyLTQgNS02IDEwLTcgNS0xIDExLTIgMTktMmw0MiAwIDAtODUtNjggMGMtMzkgMC02NyAxMC04NCAyOC0xNyAxOS0yNiA0Ni0yNiA4MmwwIDUxLTUxIDAgMCA4NSA1MSAwIDAgMjQ2IDEwMiAwIDAtMjQ2IDY4IDAgOS04NXonDQogID48L3BhdGg+DQo8L3N2Zz4="><span
										class=sr-only>Follow us on Facebook</span></a><a href=https://twitter.com/alaskaair
									aria-describedby=stepoutLabel data-omniture-tag=footer:twitter id=navTwitter><img height=24px
										width=24px alt="Follow us on Twitter"
										src=data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPScxLjEnIA0KICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIA0KICB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgY2xhc3M9J2ljb24tdHdpdHRlcjInIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9J3ByZXNlcnZlJz4NCiAgPHBhdGggZmlsbD0nI0ZGRkZGRicgZD0nbTQ5NiAxMTJjLTE5IDgtMzggMTMtNTYgMTUgMjEtMTIgMzUtMzAgNDMtNTQtMjAgMTItNDAgMjAtNjIgMjQtMjAtMjEtNDQtMzEtNzItMzEtMjcgMC01MCAxMC02OSAyOS0xOSAxOS0yOSA0Mi0yOSA2OSAwIDcgMSAxNSAzIDIyLTQwLTItNzgtMTItMTEzLTMwLTM1LTE4LTY1LTQyLTg5LTcyLTkgMTUtMTMgMzItMTMgNDkgMCAxNyAzIDMzIDExIDQ3IDggMTQgMTkgMjYgMzIgMzUtMTYtMS0zMC01LTQ0LTEzbDAgMmMwIDIzIDcgNDQgMjIgNjIgMTUgMTggMzQgMjkgNTYgMzQtOCAyLTE3IDMtMjUgMy02IDAtMTIgMC0xOS0xIDYgMTkgMTggMzUgMzUgNDggMTYgMTMgMzUgMTkgNTcgMTktMzYgMjgtNzYgNDItMTIyIDQyLTkgMC0xNiAwLTIzLTEgNDUgMjkgOTUgNDQgMTUwIDQ0IDM1IDAgNjctNSA5OC0xNyAzMC0xMSA1Ni0yNSA3OC00NCAyMS0xOCA0MC0zOSA1Ni02NCAxNS0yNCAyNy00OSAzNS03NSA3LTI2IDExLTUyIDExLTc4IDAtNiAwLTEwIDAtMTMgMTktMTQgMzYtMzEgNDktNTF6Jw0KICA+PC9wYXRoPg0KPC9zdmc+><span
										class=sr-only>Follow us on Twitter</span></a><a href=https://instagram.com/alaskaair
									aria-describedby=stepoutLabel data-omniture-tag=footer:instagram id=navInstagram><img height=24px
										width=24px alt="Follow us on Instagram"
										src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPScxLjEnIA0KICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIA0KICB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgY2xhc3M9J2ljb24taW5zdGFncmFtJyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSdwcmVzZXJ2ZSc+DQogIDxwYXRoIGZpbGw9JyNGRkZGRkYnIGQ9J200NDUgNzdjLTEwLTEwLTIyLTE2LTM3LTE2bC0zMDQgMGMtMTUgMC0yNyA2LTM3IDE2LTExIDEwLTE2IDIzLTE2IDM3bDAgMzA0YzAgMTUgNSAyNyAxNiAzOCAxMCAxMCAyMiAxNSAzNyAxNWwzMDQgMGMxNSAwIDI3LTUgMzctMTUgMTEtMTEgMTYtMjMgMTYtMzdsMC0zMDVjMC0xNC01LTI3LTE2LTM3eiBtLTI0NyAxMzJjMTYtMTYgMzYtMjMgNTgtMjMgMjMgMCA0MiA3IDU5IDIzIDE2IDE2IDI0IDM0IDI0IDU2IDAgMjItOCA0MS0yNCA1Ny0xNyAxNS0zNiAyMy01OSAyMy0yMiAwLTQyLTgtNTgtMjMtMTYtMTYtMjQtMzQtMjQtNTYgMC0yMyA4LTQxIDI0LTU3eiBtMjE2IDE5OWMwIDQtMSA4LTQgMTEtNCAzLTcgNS0xMiA1bC0yODUgMGMtNSAwLTgtMi0xMi01LTMtMy00LTctNC0xMWwwLTE3MyAzNyAwYy0zIDExLTUgMjMtNSAzNSAwIDM0IDEzIDYzIDM3IDg3IDI1IDI0IDU1IDM2IDkwIDM2IDIzIDAgNDUtNSA2NC0xNiAyMC0xMSAzNS0yNiA0Ny00NSAxMS0xOSAxNy00MCAxNy02MiAwLTEyLTItMjQtNi0zNWwzNiAwIDAgMTczeiBtMC0yMzljMCA2LTEgMTAtNSAxMy0zIDQtOCA2LTEzIDZsLTQ2IDBjLTYgMC0xMC0yLTEzLTUtNC00LTYtOC02LTE0bDAtNDNjMC01IDItMTAgNi0xMyAzLTQgNy02IDEzLTZsNDYgMGM1IDAgMTAgMiAxMyA2IDQgMyA1IDcgNSAxMmwwIDQ0eicNCiAgPjwvcGF0aD4NCjwvc3ZnPg=="><span
										class=sr-only>Follow us on Instagram</span></a><a
									href="https://www.youtube.com/user/AlaskaAirVids/?lid=footer:youtube" aria-describedby=stepoutLabel
									data-omniture-tag=footer:youtube id=navYoutube><img height=24px width=24px alt="Follow us on YouTube"
										src=data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPScxLjEnIA0KICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIA0KICB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgY2xhc3M9J2ljb24teW91dHViZScgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0ncHJlc2VydmUnPg0KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSdtNDUyIDI2NGMtMi0xMS03LTIwLTE1LTI3LTktNy0xOC0xMi0yOS0xMy0zMy00LTg0LTUtMTUyLTUtNjggMC0xMTkgMS0xNTIgNS0xMSAxLTIwIDYtMjggMTMtOCA3LTE0IDE2LTE2IDI3LTUgMjEtOCA1NC04IDk2IDAgNDQgMyA3NiA4IDk2IDIgMTEgNyAyMCAxNSAyOCA5IDcgMTggMTEgMjkgMTIgMzMgNCA4NCA2IDE1MiA2IDY4IDAgMTE5LTIgMTUyLTYgMTEtMSAyMC01IDI4LTEyIDgtOCAxNC0xNyAxNi0yOCA1LTIxIDgtNTMgOC05NiAwLTQzLTMtNzUtOC05NnogbS0yODMgMjhsLTMwIDAgMCAxNTYtMjcgMCAwLTE1Ni0yOSAwIDAtMjYgODYgMGMwIDAgMCAyNiAwIDI2eiBtNzQgMTU2bC0yNSAwIDAtMTVjLTEwIDEyLTE5IDE3LTI4IDE3LTggMC0xMy0zLTE2LTEwLTEtNC0yLTExLTItMjBsMC0xMDcgMjUgMCAwIDEwMGMwIDUgMCA5IDAgOSAwIDQgMiA2IDYgNiA1IDAgMTAtNCAxNS0xMmwwLTEwMyAyNSAwIDAgMTM1eiBtOTMtNDBjMCAxMy0xIDIyLTIgMjctMyAxMC0xMCAxNS0yMCAxNS05IDAtMTctNS0yNS0xNWwwIDEzLTI1IDAgMC0xODIgMjUgMCAwIDYwYzgtMTAgMTYtMTUgMjUtMTUgMTAgMCAxNyA1IDIwIDE1IDEgNSAyIDE0IDIgMjh6IG05My0yM2wtNDkgMCAwIDI0YzAgMTMgNCAxOSAxMyAxOSA2IDAgOS0zIDEwLTEwIDEtMiAxLTcgMS0xN2wyNSAwIDAgNGMwIDkgMCAxNC0xIDE2IDAgNS0yIDEwLTUgMTUtNyA5LTE3IDE0LTMwIDE0LTEzIDAtMjItNC0zMC0xNC01LTctOC0xNy04LTMybDAtNDdjMC0xNSAzLTI1IDgtMzIgNy05IDE3LTE0IDMwLTE0IDEyIDAgMjEgNSAyOSAxNCA1IDcgNyAxNyA3IDMyIDAgMCAwIDI4IDAgMjh6IG0tMTI4LTUyYy00IDAtOCAyLTEyIDZsMCA4M2M0IDQgOCA2IDEyIDYgNyAwIDExLTYgMTEtMThsMC01OGMwLTEzLTQtMTktMTEtMTl6IG05MSAwYy04IDAtMTIgNi0xMiAxOWwwIDEyIDI1IDAgMC0xMmMwLTEzLTUtMTktMTMtMTl6IG0tMjM5LTIxM2wwIDc0IDI3IDAgMC03NCAzMy0xMTAtMjggMC0xOCA3Mi0yMC03Mi0yOSAwYzUgMTUgMTEgMzIgMTggNTEgOSAyNiAxNCA0NSAxNyA1OXogbTk3IDc2YzEzIDAgMjMtNSAyOS0xNCA1LTcgOC0xOCA4LTMzbDAtNDhjMC0xNC0zLTI1LTgtMzItNi05LTE2LTE0LTI5LTE0LTEyIDAtMjIgNS0yOSAxNC01IDctNyAxOC03IDMybDAgNDhjMCAxNSAyIDI2IDcgMzMgNyA5IDE3IDE0IDI5IDE0eiBtLTEyLTEwMGMwLTEyIDQtMTkgMTItMTkgOCAwIDEyIDcgMTIgMTlsMCA1OGMwIDEzLTQgMTktMTIgMTktOCAwLTEyLTYtMTItMTl6IG04OCAxMDBjOSAwIDE4LTYgMjgtMTdsMCAxNSAyNSAwIDAtMTM3LTI1IDAgMCAxMDVjLTUgNy0xMSAxMS0xNiAxMS0zIDAtNS0yLTUtNi0xIDAtMS0zLTEtOWwwLTEwMS0yNSAwIDAgMTA4YzAgOSAxIDE2IDMgMjEgMiA2IDcgMTAgMTYgMTB6Jw0KICA+PC9wYXRoPg0KPC9zdmc+><span
										class=sr-only>Follow us on YouTube</span></a></div>
						<li class=undefined><a href="https://blog.alaskaair.com/?lid=footer:blog">Visit our blog <span
									class=sr-only>This indicates a link to an external site that may not follow the same accessibility or
									privacy policies as Alaska Airlines. By selecting a partner link you agree to share your data with
									these sites.</span><span
									title="This indicates a link to an external site that may not follow the same accessibility or privacy policies as Alaska Airlines. By selecting a partner link you agree to share your data with these sites.">
									<svg class=step-out-footer-link xmlns=http://www.w3.org/2000/svg viewBox="0 0 512 512">
										<g>
											<path
												d="m397 512l-360 0c-21 0-37-17-37-37l0-361c0-20 16-37 37-37l119 0c20 0 36 17 36 37 0 20-16 37-36 37l-82 0 0 287 287 0 0-82c0-20 16-36 36-36 21 0 37 16 37 36l0 119c0 20-16 37-37 37z m78-259c-20 0-37-16-37-36l0-143-142 0c-20 0-36-17-36-37 0-20 16-37 36-37l179 0c20 0 37 17 37 37l0 180c0 20-16 36-37 36z m-178 5c-9 0-18-4-25-11-15-14-15-37-1-51l177-184c14-14 37-15 52-1 15 15 15 38 1 52l-177 184c-8 7-17 11-27 11z">
											</path>
										</g>
									</svg></span></a>
						<li class=undefined><a href=https://companystore.alaskaair.com/asqxcompanystore
								data-omniture-tag=footer:companyStore>Shop our company store <span class=sr-only>This indicates a link
									to an external site that may not follow the same accessibility or privacy policies as Alaska Airlines.
									By selecting a partner link you agree to share your data with these sites.</span><span
									title="This indicates a link to an external site that may not follow the same accessibility or privacy policies as Alaska Airlines. By selecting a partner link you agree to share your data with these sites.">
									<svg class=step-out-footer-link xmlns=http://www.w3.org/2000/svg viewBox="0 0 512 512">
										<g>
											<path
												d="m397 512l-360 0c-21 0-37-17-37-37l0-361c0-20 16-37 37-37l119 0c20 0 36 17 36 37 0 20-16 37-36 37l-82 0 0 287 287 0 0-82c0-20 16-36 36-36 21 0 37 16 37 36l0 119c0 20-16 37-37 37z m78-259c-20 0-37-16-37-36l0-143-142 0c-20 0-36-17-36-37 0-20 16-37 36-37l179 0c20 0 37 17 37 37l0 180c0 20-16 36-37 36z m-178 5c-9 0-18-4-25-11-15-14-15-37-1-51l177-184c14-14 37-15 52-1 15 15 15 38 1 52l-177 184c-8 7-17 11-27 11z">
											</path>
										</g>
									</svg></span></a>
					</ul>
				</div>
			</div>
			<div class="pure-g show-only-in-easybiz sf-hidden"></div>
			<div class="pure-g show-only-in-travelagent sf-hidden"></div>
			<div class=pure-g>
				<div class="pure-u-1 airtrfx-link-list"><a
						href=https://www.alaskaair.com/en/sitemap/flights-to-countries/page-1><span>Flights to
							Countries</span></a><a href=https://www.alaskaair.com/en/sitemap/flights-to-cities/page-1><span>Flights to
							Cities</span></a><a
						href=https://www.alaskaair.com/en/sitemap/flights-from-country-to-country/page-1><span>Country to Country
							Flights</span></a><a href=https://www.alaskaair.com/en/sitemap/flights-from-city-to-city/page-1><span>City
							to City Flights</span></a><a
						href=https://www.alaskaair.com/en/sitemap/flights-from-cities/page-1><span>Flights from Cities</span></a><a
						href=https://www.alaskaair.com/en/sitemap/flights-from-countries/page-1><span>Flights from
							Countries</span></a></div>
			</div>
			<div class=pure-g style=color:white><svg class=step-out-footer-image-display xmlns=http://www.w3.org/2000/svg
					viewBox="0 0 512 512">
					<g>
						<path
							d="m397 512l-360 0c-21 0-37-17-37-37l0-361c0-20 16-37 37-37l119 0c20 0 36 17 36 37 0 20-16 37-36 37l-82 0 0 287 287 0 0-82c0-20 16-36 36-36 21 0 37 16 37 36l0 119c0 20-16 37-37 37z m78-259c-20 0-37-16-37-36l0-143-142 0c-20 0-36-17-36-37 0-20 16-37 36-37l179 0c20 0 37 17 37 37l0 180c0 20-16 36-37 36z m-178 5c-9 0-18-4-25-11-15-14-15-37-1-51l177-184c14-14 37-15 52-1 15 15 15 38 1 52l-177 184c-8 7-17 11-27 11z">
						</path>
					</g>
				</svg>
				<div class="pure-u-1 step-out-footer-text"><span class=stepout>This indicates a link to an external site that
						may not follow the same accessibility or privacy policies as Alaska Airlines. By selecting a partner link
						you agree to share your data with these sites.</span></div>
			</div>
			<div class="pure-g copyright">
				<div class=pure-u-1><span class=fine-print>© 2022 Alaska Airlines, Inc. All rights reserved.</span></div>
			</div>
			<div id=img-eskimo class=no-print><img alt="Alaska Airlines"
					src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPScxLjEnIA0KICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzODguMiAzNzUuNScgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgMzg4LjIgMzc1LjUnIHhtbDpzcGFjZT0ncHJlc2VydmUnDQo+DQo8Zz4NCjxwYXRoIGNsaXAtcGF0aD0ndXJsKCNTVkdJRF8yXyknIGZpbGw9JyNCMUQ3OEEnIGQ9J00xNjIuMywzNzJjLTguMSwxLjEtMTMuNywyLjMtMTksMS43Yy0yMi43LTIuNy02Ni0xMi41LTgyLjQtMzkNCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMTYuNC0yNi41LTQ1LjEtNDktNTAtODIuN0M2LjEsMjE5LjEsMCwxODkuNiw2LjIsMTY0LjNjLTAuMSw3LjksMC4zLDE1LjIsMC45LDIxYzEsOS45LDUuMiwxOS40LDguNiw0Ny4xDQogICAgICAgICAgICAgICAgICAgICAgICBjMS43LDE0LDcuNCwyNC4zLDE1LjcsMzUuNGMzLjQsNC41LDYuOSw4LjksOS45LDEzLjdjMC41LDIuNCwxLjIsNC43LDIuMiw3YzQsOS40LDEyLjEsMjQuNiwyMi40LDI4YzEuOSwwLjYsMy45LDEsNS40LDIuMw0KICAgICAgICAgICAgICAgICAgICAgICAgYzEuNywxLjQsMi41LDMuNSwzLjcsNS4zYzIuMSwzLjEsNi4yLDYsOS45LDguOGMwLjcsMSwxLjQsMiwyLDNDMTA2LjQsMzY0LjIsMTM5LjUsMzY5LjYsMTYyLjMsMzcyIE0zNzMsMTI2LjgNCiAgICAgICAgICAgICAgICAgICAgICAgIGMtNS45LTQ3LTIzLjctNDYuMy0zNS02My4zYy0xMS4zLTE2LjktNjQuMy00NC4yLTkyLjUtNTUuM2MtMjAuOC04LjItMzcuOC0yLjctNTYuMSwxLjFjMjguMywzLjMsNzUuNywxNi43LDg4LjMsMjcNCiAgICAgICAgICAgICAgICAgICAgICAgIGMyLDEuNiw0LjksNS4xLDguNCw5LjdjMC4xLDAuMSwwLjIsMC4zLDAuMywwLjRjMTEuOSw0LjEsMjEuNCw5LDMzLjMsMjJjMywzLjIsNS45LDYuNSw5LDkuNmMyLjIsMi4yLDQuOSwzLjcsNy4xLDUuOQ0KICAgICAgICAgICAgICAgICAgICAgICAgYzYsNi4xLDExLjksMTIuMiwxNy45LDE4LjRjMi4xLDIuMSwyLDMuNSwyLjEsNC4yYzAsMC43LTAuMywxLjktMS4yLDEuMWMtMC45LTAuOC0yLjUtMS4zLTMuMi0wLjNjLTAuOCwxLjUsMC44LDMuNiwyLjMsNS42DQogICAgICAgICAgICAgICAgICAgICAgICBjMS45LDIuNiwyLjcsNS45LDQuMSw4LjhjMi45LDYuNCw1LjksMTIuOCw3LjQsMTkuN2MxLjQsNi41LDQuOCwxMi44LDcuMSwxOS4xYzQuOSwxMy40LDcuNiwyNy4yLDUuNCw0MS40DQogICAgICAgICAgICAgICAgICAgICAgICBjLTEuNCw4LjktMi44LDE3LjctMy44LDI2LjVjMS40LTYuMywzLjMtMTQsNi4zLTIzLjlDMzg4LjIsMTc3LjUsMzc4LjgsMTczLjgsMzczLDEyNi44Jw0KICAgID48L3BhdGg+DQo8cGF0aCBjbGlwLXBhdGg9J3VybCgjU1ZHSURfMl8pJyBmaWxsPScjNDZBOEM2JyBkPSdNMzcsMjYyLjhjLTEuMi0zLjEtMi44LTYtNC4zLTljLTAuMy0wLjYtMC42LTEuMi0xLTEuOQ0KICAgICAgICAgICAgICAgICAgICAgICAgYy00LjYtOS04LjgtMTguMy0xMS4zLTI4Yy0yLjgtMTAuNC0zLjYtMjEuNS0xLjEtMzJjMS45LTcuOCw1LjYtMTUsOC40LTIyLjVjNC42LTEyLjYsNi4xLTI2LjEsMTAuMS0zOC45DQogICAgICAgICAgICAgICAgICAgICAgICBjMS45LTYuMiw0LjUtOS41LDcuNC0xNWMzLTUuNSw3LjEtMTAuMywxMS4yLTE1LjJDNjYuNSw4OCw3OC4yLDc3LjIsOTEuMiw2OGMzLTIuMSw2LjEtNC43LDkuNi01LjljMi45LTEsNS4yLTAuOCw4LTIuNQ0KICAgICAgICAgICAgICAgICAgICAgICAgYzYuMS0zLjcsOS40LTEwLjUsMTUuNi0xNEMxMzIuNiw0MSwxNDEuNSwzMi42LDE1MSwzMWMzLjgtMC43LDcuMS0wLjMsMTAuOS0xLjRjNS4zLTEuNiwxMC40LTMuNywxNS44LTUuMg0KICAgICAgICAgICAgICAgICAgICAgICAgYzIuNS0wLjcsNC44LTEuOSw3LjQtMS45YzUuMy0wLjEsMTAuOCwxLjIsMTYuMSwwLjdjNS44LTAuNiwxMS41LTMuMiwxNy40LTRjMC42LTAuMSwxLjMtMC4xLDEuNywwLjRjMC40LDAuNiwwLDEuMy0wLjQsMS44DQogICAgICAgICAgICAgICAgICAgICAgICBjLTEuNywyLjMtMy4zLDUuNS0xLjUsNy42YzEsMS4zLDIuOSwxLjUsNC41LDEuNWM2LjItMC4xLDEyLjYtMi4zLDE4LjctMC40YzMuMywxLDcsMSwxMC40LDEuNGMzLjgsMC41LDcuNywwLjksMTEuNSwxLjQNCiAgICAgICAgICAgICAgICAgICAgICAgIGMwLjcsMC4xLDEuNSwwLjIsMi4yLDAuNWMwLjcsMC40LDEuMiwxLjEsMS4xLDEuOGMtMC4xLDEuMi0xLjcsMS44LTIsM2MtMC4yLDAuOSwwLjQsMS44LDEuMiwyLjJjNC4yLDIuMywxMC4xLDMsMTQuOCw0LjMNCiAgICAgICAgICAgICAgICAgICAgICAgIGMwLjIsMCwwLjMsMC4xLDAuNSwwLjJjMC41LDAuMSwwLjgsMC4yLDEsMC4yYzEuNCwwLjQsMi43LDAuOSw0LDEuM2MtMC4xLTAuMS0wLjItMC4zLTAuMy0wLjRjLTMuNS00LjYtNi40LTguMS04LjQtOS43DQogICAgICAgICAgICAgICAgICAgICAgICBDMjYzLjksMjUsMjA4LDkuOSwxODEuNiw4LjZDMTU1LjMsNy40LDEyNy41LDIwLDk2LjEsMzEuOWMtMzEuNCwxMS45LTQ3LDQ0LjQtNjksNjUuOUM1LDExOS4yLDQuOCwxNjMsNy4xLDE4NS40DQogICAgICAgICAgICAgICAgICAgICAgICBjMSw5LjksNS4yLDE5LjQsOC42LDQ3LjFjMS43LDE0LDcuNCwyNC4zLDE1LjcsMzUuNGMzLjQsNC41LDYuOSw4LjksOS45LDEzLjdDNDAsMjc1LjIsMzkuNSwyNjguOCwzNywyNjIuOCcNCiAgICA+PC9wYXRoPg0KPHBhdGggY2xpcC1wYXRoPSd1cmwoI1NWR0lEXzJfKScgZmlsbD0nIzBGN0JCNicgZD0nTTM3Mi4xLDE2MC42Yy0yLjMtNi4zLTUuNy0xMi42LTcuMS0xOS4xYy0xLjUtNi45LTQuNC0xMy4zLTcuNC0xOS43DQogICAgICAgICAgICAgICAgICAgICAgICBjLTEuNC0yLjktMi4xLTYuMi00LjEtOC44Yy0xLjUtMi0zLTQtMi4zLTUuNmMwLjctMSwyLjMtMC42LDMuMiwwLjNjMC45LDAuOCwxLjItMC40LDEuMi0xLjFjMC0wLjcsMC0yLjEtMi4xLTQuMg0KICAgICAgICAgICAgICAgICAgICAgICAgYy02LTYuMS0xMS45LTEyLjItMTcuOS0xOC40Yy0yLjItMi4zLTQuOS0zLjctNy4xLTUuOWMtMy4xLTMuMS02LTYuNC05LTkuNkMzMDYuNSw1NCwyOTYuMiw0OS41LDI4Mi4zLDQ1DQogICAgICAgICAgICAgICAgICAgICAgICBjLTAuMi0wLjEtMC41LTAuMS0xLTAuMmM2LjksMiw2LjEsNS4yLDkuMywxMC41YzMuNiw1LjksMTEuNiwxMS4xLDE3LDE1LjNjMy40LDIuNyw2LjksNS4zLDkuOSw4LjVjNC43LDUsNi45LDExLjMsMTAuMSwxNy4yDQogICAgICAgICAgICAgICAgICAgICAgICBjMS4yLDIuMywxLjUsNS4xLDMuMyw2LjljMS45LDEuOSw1LjIsMi4yLDYuNiw0LjVjMS41LDIuNC0wLjEsNS41LDAuMSw4LjNjMC4zLDUuNywyNC42LDIxLjcsOC41LDI3LjINCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMC40LDAuMS0wLjgsMC4yLTEuMSwwLjZjLTAuMywwLjQtMC4zLDAuOS0wLjIsMS40YzAuNSw0LjEsMy44LDcuMyw2LjQsMTAuNmM1LjEsNi40LDcuNSwxNCw4LjEsMjJjMC4yLDIuNC0wLjIsMTYuMi0zLDIwDQogICAgICAgICAgICAgICAgICAgICAgICBjLTAuNCwwLjYtMC4yLDAuOSwwLjQsMS4xYzIuNCwwLjYsNS4yLDIuNyw1LDQuNmMtMC42LDUuNy00LjIsMTAuOC00LjgsMTYuNGMtMSw4LjcsNSwxNy4zLDMuMSwyNS45DQogICAgICAgICAgICAgICAgICAgICAgICBjLTEuNiw3LjQtOC45LDEzLjItOC45LDIwLjhjMCwxLjgsMC40LDMuOC0wLjQsNS40Yy0wLjgsMS42LTIuNSwyLjQtNCwzLjNjLTguNCw1LjEtMTIuMywxNS4xLTE5LjgsMjEuNQ0KICAgICAgICAgICAgICAgICAgICAgICAgYy00LjMsMy43LTkuNyw2LTE0LjMsOS40Yy01LjQsMy45LTEyLjUsMTUuMy0xOS4zLDE1LjdjLTIuMywwLjItNC42LTAuOS02LjktMS4yYy0zLjYtMC40LTcsMS4yLTEwLjIsMi44DQogICAgICAgICAgICAgICAgICAgICAgICBjLTYuNiwzLjItMTMuMSw0LjYtMTkuOCw3LjNjLTcuMywzLTE0LjIsOC44LTIwLjYsMTMuM2MtMTMuMyw5LjQtMjYuNiwxOS4yLTQyLjIsMjQuNmMtMi4zLDAuOC01LjcsMS02LjUtMS4zDQogICAgICAgICAgICAgICAgICAgICAgICBjLTAuOS0yLjcsMy4zLTQuNiwzLjctNy41Yy0yLjUtMC41LTQuNiwxLjUtNi43LDNjLTQuMiwzLTkuNiwzLjctMTQuOCw0Yy05LjYsMC41LTE5LjktMC4xLTI5LjMtMi43DQogICAgICAgICAgICAgICAgICAgICAgICBjLTUuNi0xLjYtMTAuNy0zLjEtMTUuNS02LjRjLTExLjUtNy45LTI0LjctMTEuMy0zNS0yMS4xYy0xLjMtMS4zLTIuOS0yLjUtNC43LTMuOGMwLjcsMSwxLjQsMiwyLDMNCiAgICAgICAgICAgICAgICAgICAgICAgIGMyMS40LDMxLjMsNTkuNywzNC42LDgyLjEsMzYuOGMxMCwwLjksMjAuMS0xLjMsNDcuOSwwLjhjMjcuOCwyLjEsMjkuNC03LjcsNzMuNS0yMy40YzE2LjYtNS45LDMyLjItMTQuMSw0MS43LTI5LjUNCiAgICAgICAgICAgICAgICAgICAgICAgIGM1LjItOC40LDEwLjQtMTYuOCwxNS40LTI1LjRjMi4zLTMuOSw1LTcuNyw3LTExLjdjMS45LTMuNyw1LjQtMTAuMSw3LTguOWMwLjgsMC41LDAuNCwyLjYsMS4yLDMuMWMwLjQsMC4zLDAuOS0wLjIsMS4yLTAuNg0KICAgICAgICAgICAgICAgICAgICAgICAgYzYuNi0xMC4yLDcuMi0yMC41LDgtMzIuNmMxLTE0LjYsMy4yLTI4LjMsNS41LTQyLjZDMzc5LjcsMTg3LjcsMzc3LDE3My45LDM3Mi4xLDE2MC42Jw0KICAgID48L3BhdGg+DQo8cGF0aCBjbGlwLXBhdGg9J3VybCgjU1ZHSURfMl8pJyBmaWxsPScjMDA0MTZBJyBkPSdNMjI1LjIsMTk1LjVjLTMuNSwxLjktNi4zLDIuMi0xMS4zLDIuNGMtNC45LDAuMi05LjMtMC42LTEwLjUtMC43DQogICAgICAgICAgICAgICAgICAgICAgICBjLTEuMi0wLjEtMS43LTEuNC0xLjgtM2MtMC4yLTMuMywxLjgtMi42LDMuOS0yLjVjMi4xLDAuMSw0LTAuNCw3LTAuM2MzLjEsMC4xLDYuOCwwLjksMTEuMiwwLjFjMy4yLTAuNiw0LjItMS44LDUtMi40DQogICAgICAgICAgICAgICAgICAgICAgICBjMC44LTAuNiwxLjItMC4zLDEuOSwxLjNDMjMxLjMsMTkyLDIyOC43LDE5My42LDIyNS4yLDE5NS41IE0xNTYuNSwxOTEuMWMtMS4zLTAuOC0yLjEtMS0zLTEuN2MtMC45LTAuNi0xLjEtMC41LTEuOSwwLjENCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMC44LDAuNy0zLDIuNS04LjEsMy45Yy01LjEsMS4zLTcuMiwxLjYtOC44LDEuNmMtMSwwLTItMC4zLTIuNywxLjJjLTAuNywxLjQtMC40LDIuNCwwLjYsMi44YzEsMC40LDQuMSwxLjUsOC4xLDEuMQ0KICAgICAgICAgICAgICAgICAgICAgICAgYzMuOS0wLjQsNi44LTEuMiw5LjYtMi41YzIuOS0xLjIsNS41LTIuMyw2LjYtMy40QzE1OCwxOTMuMSwxNTcuOCwxOTIsMTU2LjUsMTkxLjEgTTIzMi4zLDIzNy41Yy0xLjIsMC4xLTEuNSwwLjItMi4xLDAuOQ0KICAgICAgICAgICAgICAgICAgICAgICAgYy0wLjcsMC44LTAuNSwxLjEsMCwzLjNjMC41LDIuMiwxLjMsNS4zLDEuNSwxMC43YzAuMSw1LjQtMC40LDExLjYtMS41LDE0LjRjLTEuMSwyLjgsMS40LDIuOCwxLjgsMi44YzAuNCwwLDEuOSwwLDIuNCwwDQogICAgICAgICAgICAgICAgICAgICAgICBjMS0wLjEsMS4zLTAuOSwxLjctMi4zYzAuNC0xLjQsMC42LTUuOCwwLjctMTMuNmMwLjEtNy44LTIuMS0xMS4yLTIuOS0xMy40QzIzMy4yLDIzOC4zLDIzMy4xLDIzNy40LDIzMi4zLDIzNy41IE0zNjAsMjQ1LjkNCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMS42LDcuNC04LjksMTMuMi04LjksMjAuOGMwLDEuOCwwLjQsMy44LTAuNCw1LjRjLTAuOCwxLjYtMi41LDIuNC00LDMuM2MtOC40LDUuMS0xMi4zLDE1LjEtMTkuOCwyMS41DQogICAgICAgICAgICAgICAgICAgICAgICBjLTQuMywzLjctOS43LDYtMTQuMyw5LjRjLTUuNCwzLjktMTIuNSwxNS4zLTE5LjMsMTUuN2MtMi4zLDAuMi00LjYtMC45LTYuOS0xLjJjLTMuNi0wLjQtNywxLjItMTAuMiwyLjgNCiAgICAgICAgICAgICAgICAgICAgICAgIGMtNi42LDMuMi0xMy4xLDQuNi0xOS43LDcuM2MtNy4zLDMtMTQuMiw4LjgtMjAuNiwxMy4zYy0xMy4zLDkuNC0yNi42LDE5LjItNDIuMiwyNC42Yy0yLjMsMC44LTUuNywxLTYuNS0xLjMNCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMC45LTIuNywzLjMtNC42LDMuNy03LjVjLTIuNS0wLjUtNC42LDEuNS02LjcsM2MtNC4yLDMtOS42LDMuNy0xNC44LDRjLTkuNiwwLjUtMTkuOS0wLjEtMjkuMy0yLjcNCiAgICAgICAgICAgICAgICAgICAgICAgIGMtNS42LTEuNi0xMC43LTMuMS0xNS41LTYuNGMtMTEuNS03LjktMjQuNy0xMS4zLTM1LTIxLjFjLTQuMi00LTExLjUtOC4xLTE0LjUtMTIuNmMtMS4yLTEuOC0yLTMuOS0zLjctNS4zDQogICAgICAgICAgICAgICAgICAgICAgICBjLTEuNS0xLjItMy41LTEuNi01LjQtMi4zYy0xMC4zLTMuNC0xOC41LTE4LjYtMjIuNC0yOGMtMy41LTguMy0zLjEtMTcuNC02LjUtMjUuOGMtMS4yLTMuMS0yLjgtNi00LjMtOQ0KICAgICAgICAgICAgICAgICAgICAgICAgYy0wLjMtMC42LTAuNi0xLjItMS0xLjljLTQuNi05LTguOC0xOC4zLTExLjMtMjhjLTIuOC0xMC40LTMuNi0yMS41LTEuMS0zMmMxLjktNy44LDUuNi0xNSw4LjQtMjIuNQ0KICAgICAgICAgICAgICAgICAgICAgICAgYzQuNi0xMi42LDYuMS0yNi4xLDEwLjEtMzguOWMxLjktNi4yLDQuNS05LjUsNy40LTE1YzMtNS41LDcuMS0xMC4zLDExLjItMTUuMkM2Ni41LDg4LDc4LjIsNzcuMiw5MS4yLDY4DQogICAgICAgICAgICAgICAgICAgICAgICBjMy0yLjEsNi4xLTQuNyw5LjYtNS45YzIuOS0xLDUuMi0wLjgsOC0yLjVjNi4xLTMuNyw5LjQtMTAuNSwxNS42LTE0QzEzMi42LDQxLDE0MS41LDMyLjYsMTUxLDMxYzMuOC0wLjcsNy4xLTAuMywxMC45LTEuNA0KICAgICAgICAgICAgICAgICAgICAgICAgYzUuMy0xLjYsMTAuNC0zLjcsMTUuOC01LjJjMi41LTAuNyw0LjgtMS45LDcuNC0xLjljNS4zLTAuMSwxMC44LDEuMiwxNi4xLDAuN2M1LjgtMC42LDExLjUtMy4yLDE3LjQtNA0KICAgICAgICAgICAgICAgICAgICAgICAgYzAuNi0wLjEsMS4zLTAuMSwxLjcsMC40YzAuNCwwLjYsMCwxLjMtMC40LDEuOGMtMS43LDIuMy0zLjMsNS41LTEuNSw3LjZjMSwxLjMsMi45LDEuNSw0LjUsMS41YzYuMi0wLjEsMTIuNi0yLjMsMTguNy0wLjQNCiAgICAgICAgICAgICAgICAgICAgICAgIGMzLjIsMSw3LDEsMTAuNCwxLjRjMy44LDAuNSw3LjcsMC45LDExLjUsMS40YzAuNywwLjEsMS41LDAuMiwyLjIsMC41YzAuNywwLjQsMS4yLDEuMSwxLjEsMS44Yy0wLjEsMS4yLTEuNywxLjgtMS45LDMNCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMC4yLDAuOSwwLjQsMS44LDEuMiwyLjJjNC4yLDIuMywxMC4xLDMsMTQuOCw0LjNjNy41LDIsNi41LDUuMiw5LjgsMTAuN2MzLjYsNS45LDExLjYsMTEuMSwxNywxNS4zYzMuNCwyLjcsNi45LDUuMyw5LjksOC41DQogICAgICAgICAgICAgICAgICAgICAgICBjNC43LDUsNi45LDExLjMsMTAuMSwxNy4yYzEuMiwyLjMsMS41LDUuMSwzLjMsNi45YzEuOSwxLjksNS4yLDIuMiw2LjYsNC41YzEuNSwyLjQtMC4xLDUuNSwwLjEsOC40DQogICAgICAgICAgICAgICAgICAgICAgICBjMC40LDUuNywyNC42LDIxLjcsOC41LDI3LjJjLTAuNCwwLjEtMC44LDAuMi0xLjEsMC42Yy0wLjMsMC40LTAuMywwLjktMC4zLDEuNGMwLjUsNC4xLDMuOCw3LjMsNi40LDEwLjYNCiAgICAgICAgICAgICAgICAgICAgICAgIGM1LjEsNi40LDcuNSwxNCw4LjEsMjJjMC4yLDIuNC0wLjIsMTYuMi0zLDIwYy0wLjQsMC42LTAuMiwwLjksMC40LDEuMWMyLjQsMC42LDUuMiwyLjcsNSw0LjZjLTAuNiw1LjctNC4yLDEwLjgtNC44LDE2LjQNCiAgICAgICAgICAgICAgICAgICAgICAgIEMzNTYsMjI4LjcsMzYxLjksMjM3LjMsMzYwLDI0NS45IE03OC42LDExNi4xYzAuNy0zLjQsNC01LjUsMy43LTguOWMwLTAuMi0wLjEtMC42LTAuOS0wLjJjLTMuOSwxLjgtNy45LDguMy0xMC43LDExLjENCiAgICAgICAgICAgICAgICAgICAgICAgIGMtNC42LDQuNi05LjEsOS40LTEzLjQsMTQuM2MtMy40LDMuOS02LjcsNy45LTguOSwxMi42Yy01LjgsMTIuMy03LjEsMjYuMi02LDM5LjZjMC42LDcuMywxLjksMTQuNSwzLjcsMjEuNQ0KICAgICAgICAgICAgICAgICAgICAgICAgYzEuNiw2LDEuNSwxMi44LDMuMywxOC40YzAuNSwxLjcsMS43LDMuMiwzLjEsNC4xYzAuNSwwLjMsMS43LDAuMywxLjctMS43Yy0wLjEtMTMuNSwwLjEtMjcsMC43LTQwLjVjMC4yLTMuNiwwLjUtNy4yLDAuOS0xMC44DQogICAgICAgICAgICAgICAgICAgICAgICBjMS4yLTkuNywzLjUtMTkuMyw3LjMtMjguM2MzLjctOC45LDE1LjktMTYuMywxNS42LTI2LjNDNzguNiwxMTkuMyw3OC4yLDExNy42LDc4LjYsMTE2LjEgTTI2MS44LDE3My41DQogICAgICAgICAgICAgICAgICAgICAgICBjLTIuMSwwLjMtOC40LDEuMy05LjIsMS4zYy0wLjgsMC0yLjQsMC4yLTIuMywxLjNjMC4xLDEuMywzLjgsMi40LDkuMSwxLjdjNS4yLTAuNyw3LjYtMS4zLDcuNC0zLjENCiAgICAgICAgICAgICAgICAgICAgICAgIEMyNjYuNiwxNzIuOSwyNjQsMTczLjIsMjYxLjgsMTczLjUgTTI1NSwxODMuMmMtMC4xLTAuNS0xLjQtMC43LTIuMy0wLjZjLTEsMC02LjktMS0xMC43LTQuM2MtMy43LTMuNC03LjItNy44LTkuMi0xMA0KICAgICAgICAgICAgICAgICAgICAgICAgYy0yLTIuMS00LjQtNC43LTEwLjMtNC4xYy01LjksMC42LTExLjUsMi40LTEwLjksNWMwLjMsMS40LDMuNiwxLDYuOSwwLjNjMy40LTAuNiw4LjItMS40LDkuNSwwLjdjMS40LDIuMiwzLjUsNi40LDcuNSw5LjYNCiAgICAgICAgICAgICAgICAgICAgICAgIGM0LDMuMiw5LDUuOCwxNC42LDUuNkMyNTUuOSwxODUuMywyNTUuMSwxODMuNiwyNTUsMTgzLjIgTTEzNC40LDE0MS42YzAuNSwxLjQsMi4yLDIuMiw2LjQsMS44YzQuNy0wLjQsMjAuNS0yLjcsMjQuOCwwLjYNCiAgICAgICAgICAgICAgICAgICAgICAgIGMyLjQsMS44LDIuOCwyLjIsMy4yLDYuOGMwLjMsNC42LDAuOCw0LjIsMS41LDQuM2MwLjYsMC4xLDIuNi0wLjksNC43LTQuNmMyLjEtMy44LDEwLjktNy42LDIyLjctOC42YzExLjgtMSwyMS44LTEsMzMuOCw1LjMNCiAgICAgICAgICAgICAgICAgICAgICAgIGMxMS43LDYuMSwyNC45LDE2LDMxLDEzLjFjMy4yLTEuNSw1LjItNi42LDItMTkuM2MtMy4xLTEyLjYtOC44LTIwLjQtMTAuOS0yMi42Yy0yLTIuMi01LTQuNy03LTMuNWMtMiwxLjIsMC41LDgsMi41LDExLjENCiAgICAgICAgICAgICAgICAgICAgICAgIGMyLDMsMi4yLDQuOS0xLjUsMy42Yy0zLjctMS4zLTcuMy0zLjItMTEuMS02LjljLTMuNy0zLjctOS41LTE0LjQtMTIuNy0xMi43Yy0zLjIsMS43LDAuOSw4LjktMC44LDkuNw0KICAgICAgICAgICAgICAgICAgICAgICAgYy0xLjcsMC44LTUuMS0zLjEtOC4yLTcuNGMtMy00LjMtNS4zLTkuMy05LjQtMTAuN2MtNC4xLTEuMy0xNC42LTIuNS0zMC4xLDQuM2MtMTQuNiw2LjUtMjYuNiwxNi4yLTM0LDIzLjUNCiAgICAgICAgICAgICAgICAgICAgICAgIEMxMzQuMiwxMzYuOSwxMzMuOSwxNDAuMiwxMzQuNCwxNDEuNiBNMTI4LjQsMTc0LjFjMC40LDEuMiwxLjYsMi45LDUsMS43YzMuNS0xLjIsMTAtMy4yLDEzLjQtNGMzLjQtMC44LDgtMC45LDkuOS0wLjYNCiAgICAgICAgICAgICAgICAgICAgICAgIGMxLjgsMC4yLDEuOS0xLjYsMC45LTJjLTEtMC40LTcuOS0yLjItMTEtMy4yYy0zLjEtMS00LjQtMC40LTUuNi0wLjFjLTEuMiwwLjMtNy4xLDIuMi05LjksMy4xDQogICAgICAgICAgICAgICAgICAgICAgICBDMTI4LjIsMTcwLDEyNy40LDE3MS41LDEyOC40LDE3NC4xIE0xMDMuNyw4NC44Yy0wLjItMC4yLTEsMC40LTEuNSwwLjdjLTEuNSwwLjktMy4yLDEuNi00LjgsMi40Yy0zLjQsMS42LTYuMywzLjItNi44LDcuMg0KICAgICAgICAgICAgICAgICAgICAgICAgYy0wLjEsMC41LTAuMSwxLjEsMC4xLDEuNmMwLjEsMC4yLDAuMSwwLjMsMC4yLDAuNWMwLjksMS4yLDQuNC0wLjcsNS40LTEuM2MxLjUtMC45LDItMi4xLDIuOC0zLjRjMC42LTEsMS40LTIuMSwyLTMuMQ0KICAgICAgICAgICAgICAgICAgICAgICAgYzAuOC0xLjEsMS41LTIuMiwyLjMtMy4zQzEwMy42LDg1LjYsMTAzLjksODUsMTAzLjcsODQuOCBNMjcxLjgsMTkzLjhjLTQtMi4yLTUuNi0zLjMtOC40LTMuOWMtMi42LTAuNi0zLjQtMC40LTQuNy0wLjYNCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMS4yLTAuMi0xLjUtMC4yLTEuNywwLjFjLTAuMSwwLjMsMC4yLDAuNywxLjQsMS40YzEuMiwwLjcsMy41LDIsNC45LDMuM2MxLjQsMS4zLDIuOCwyLjcsMS45LDQuMWMtMC44LDEuNC0zLjYsMC45LTUuNi0wLjINCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMi0xLjEtNC44LTMuMy01LjktMy44Yy0xLjEtMC40LTEuOS0wLjUtMS42LDAuNmMwLjMsMS4xLDAuOCwyLjQsMCwzYy0wLjgsMC43LTMuMywwLjctNS42LTEuMmMtMi4yLTEuOS0yLjktMy4yLTUuOC01LjYNCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMi0xLjctMy45LTIuNC01LjQtMy41Yy0xLjUtMS4xLTIuOS0yLjQtNS0zYy0yLjEtMC42LTguMS0xLjgtMTYuOC0wLjRjLTguNywxLjUtMTAuNywzLjEtMTMuNCwyLjhjLTEuNi0wLjItMS45LTAuNy0yLjQtMi4zDQogICAgICAgICAgICAgICAgICAgICAgICBjLTAuNS0xLjYtMC44LTEuOC0xLjctMi4yYy0wLjgtMC40LTEuOC0wLjItMy4zLTAuOWMtMS41LTAuNy00LjktMS43LTguNi03LjFjLTIuOC00LjEtMy44LTYuNi01LjEtOC41DQogICAgICAgICAgICAgICAgICAgICAgICBjLTEuNC0xLjktMi4zLTIuNC0zLjktMi4zYy0yLjMsMC4xLTMuNiwzLjMtNC41LDguMmMtMC45LDQuOS0xLjMsOS40LTMuNiwxMC44Yy0yLjQsMS40LTQuOCwwLjctNi4xLDAuMw0KICAgICAgICAgICAgICAgICAgICAgICAgYy0xLjMtMC40LTIuOC0xLjEtNS0wLjljLTIuMiwwLjEtMy42LDAuMS03LjYsMi4zYy00LDIuMi01LDMuMS04LjYsMy45cy00LjcsMC44LTUuNywxYy0xLDAuMS0xLjUtMC4xLTIuMSwyLjINCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMC42LDIuMy0xLjksNC44LTMuMyw1Yy0xLjQsMC4yLTIuMy0wLjYtMy0xYy0wLjctMC41LTMuNC0yLjYtNC45LTMuM2MtMS41LTAuNi00LjUtMS40LTcuMSwxLjFjLTIuNiwyLjUtNi43LDkuNC04LjIsMTkuMg0KICAgICAgICAgICAgICAgICAgICAgICAgYy0xLjUsOS44LTIuNSwxOS4yLDAuMSwyMC4xYzIuNSwwLjksNi42LTExLjEsMTAuNy05LjRjMy42LDEuNSwxLjksMzAuNiwxLjcsMzYuOWMtMC4zLDYuMy0xLjUsMTUuNywxLDIyLjINCiAgICAgICAgICAgICAgICAgICAgICAgIGMyLjUsNi41LDQuOCw5LjYsMTQuOCwxNy44YzEwLDguMiwxMS43LDkuOCwxMy45LDEyYzIuMiwyLjIsOCw2LjEsOS41LDYuOGMxLjUsMC43LDQuOCwxLjMsNi4yLTIuMWMxLjQtMy40LDIuMi03LDYuNC0xMC4zDQogICAgICAgICAgICAgICAgICAgICAgICBjNC4zLTMuMyw1LjMtNi4yLDQuMi04LjFjLTEuMS0xLjktMi45LTItNS44LTEuNWMtMi45LDAuNS03LjksMi4yLTE1LjYsMWMtNy43LTEuMi0xOS4zLTQuMy0yMC4zLTkuN2MtMC43LTMuOCwyLjMtNy42LDMtMTAuNw0KICAgICAgICAgICAgICAgICAgICAgICAgYzAuNi0yLjksMi41LTktMC43LTExLjZjLTIuMS0xLjctMy45LDAuOC01LDIuM2MtMS4xLDEuNS00LDMtMy45LTFjMC4xLTMuOSwwLjItOC4xLDAuNi0xMS43YzAuMy0yLjUtMC4zLTcuOS0wLjctOS45DQogICAgICAgICAgICAgICAgICAgICAgICBjLTAuNC0yLDAuMy01LjUsMi41LTcuMWMyLjMtMS41LDctMy44LDguOC00LjljMS44LTEuMSwzLjctMi4yLDMuOC01LjFjMC4xLTIuOSwyLjItOC40LDMuNi0xMWMxLjQtMi41LDIuMi00LjYsMi4zLTYNCiAgICAgICAgICAgICAgICAgICAgICAgIGMwLjItMS40LDEtMi42LDMuMy0zYzIuMy0wLjQsMy4yLTAuMywyLjYsMS42Yy0wLjYsMS45LTEuOSw0LjMtMS44LDYuMWMwLjEsMS45LDEuMSwyLjksMi45LDMuOGMxLjcsMSwzLjUsMiw3LjksMC41DQogICAgICAgICAgICAgICAgICAgICAgICBjNC40LTEuNSwxMC40LTMuNiwxNC4yLTMuM2M0LjQsMC4zLDcuNywyLjYsMTAuOCwzLjVjMi4zLDAuNywyLjYsMC44LDYuOCwxLjljMi4xLDAuNiwzLjQsMC4xLDMuOS0wLjNjMC41LTAuNCwxLjItMS4zLDAuOC0zDQogICAgICAgICAgICAgICAgICAgICAgICBjLTAuNC0xLjctMi40LTUuNC0wLjYtNi4yYzEuOC0wLjgsMy43LDEuNyw1LjEsNS4xYzEuNCwzLjQsMy44LDguNiw1LjgsMTAuOGMyLDIuMiw0LjksMyw4LjMsNC4yYzMuNCwxLjIsNS42LDAuOSw3LDYuNw0KICAgICAgICAgICAgICAgICAgICAgICAgYzEuNCw1LjgsMS42LDcuOCwxLjcsMTAuNWMwLjEsNS44LTEsNi43LTEsMTAuOGMwLDQuOCwwLjUsNi4zLTEuMyw4LjRjLTAuNiwwLjctMS4zLDEuMy0yLDAuN2MtMC43LTAuNi0wLjEtMS4yLDAuMi0yLjENCiAgICAgICAgICAgICAgICAgICAgICAgIGMwLjUtMS4zLDAuMi0zLjIsMC4xLTUuNmMtMC4xLTEuNy0wLjEtMS44LTAuMi0yLjJjLTAuMS0xLTAuNi0xLjUtMS40LTEuNGMtMS44LDAuMi0yLjksMS42LTUuNiwxLjhjLTIuNywwLjItOC44LDAuMy0xMi42LDAuNg0KICAgICAgICAgICAgICAgICAgICAgICAgYy0zLjcsMC4zLTExLjcsMC44LTE3LjksMWMtNi4xLDAuMi0xMC42LDAuMi0xNi44LTAuNGMtNi4yLTAuNy03LjQtMS04LjUtMWMtMS4yLDAtNi43LDAuNi03LjcsNC40Yy0wLjUsMi0wLjMsMi44LDEuMSwzLjENCiAgICAgICAgICAgICAgICAgICAgICAgIGMxLjQsMC4zLDcuNSwwLjcsMTAuNCwxLjFjMi45LDAuNCw5LjQsMS4zLDEyLjYsMS40YzMuMiwwLDcuMy0wLjMsOS43LTAuM2MyLjMsMCw3LjgsMC40LDgsOC4xYzAsMi42LDAuMiw0LjksMiw2LjINCiAgICAgICAgICAgICAgICAgICAgICAgIGMxLjgsMS4zLDguNyw0LjYsMTQuOSw3LjNjNi4yLDIuNywxMiwzLjEsMTUuMiwxLjhjMy4yLTEuMyw0LjMtMy4zLDMuMy02LjNjLTEuMS0zLTEuMi01LjIsMC4xLTYuMmMxLjMtMSwyLjctMi4xLDguNy0xLjgNCiAgICAgICAgICAgICAgICAgICAgICAgIGMzLjMsMC4yLDcuNywxLjgsOS43LTEuMWMyLjctMy45LDMtNC42LDgtOGM1LTMuNCw3LjUtNS43LDcuMy0xNC4yYy0wLjItOC43LTEtMjMuNSwwLjItMzIuOGMxLjItOC45LDYuOC0xMy4zLDEwLTE5LjUNCiAgICAgICAgICAgICAgICAgICAgICAgIEMyNzQuNiwxOTguNywyNzUuOCwxOTYsMjcxLjgsMTkzLjggTTE2Ni4yLDI1My4zYzE1LjMsMi40LDM0LjksMy4zLDM4LjgsMy4xYzMuOS0wLjEsOC4xLTEuNywxMC45LTIuOGMyLjgtMS4yLDMuNy0xLjgsNC4yLTIuOQ0KICAgICAgICAgICAgICAgICAgICAgICAgYzAuNS0xLjEtMC4yLTUuMS0wLjYtNi43Yy0wLjUtMS42LTIuNS0zLjMtMy43LTQuNWMtMS4zLTEuMi0zLjYtMy00LTMuMmMtMS40LTEtMy4yLTEuMi0xMi42LTAuNGMtOS40LDAuOC0xMywyLjMtMTcuOSw0LjMNCiAgICAgICAgICAgICAgICAgICAgICAgIGMtNC45LDItNS45LDQuMy04LjMsNi4yYy0yLjUsMS45LTUuOSwzLTcuNCw1QzE2NC4zLDI1Mi45LDE2NS40LDI1My4yLDE2Ni4yLDI1My4zIE0xNDQuNywyMzguNmMtMC45LTEuNi0yLjQtMC4zLTMuNCwwLjMNCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMSwwLjYtNCwyLjgtNi4yLDQuNGMtMi4xLDEuNi0yLjksMy43LTMuNSw1LjVjLTAuNiwxLjgtMC42LDQuNCwwLjgsNS4xYzAuOSwwLjUsMi4zLDAuMSwzLjMtMC4zYzEuMi0wLjUsMS45LTAuOCwyLjktMS41DQogICAgICAgICAgICAgICAgICAgICAgICBjMS42LTEuMSwyLjMtMS43LDMuNS0yLjhjMS4yLTEuMSwxLjktMi4yLDMuMi00LjhDMTQ2LjUsMjQyLDE0NS42LDI0MC4yLDE0NC43LDIzOC42IE0zMTkuMiwxMzQuNWMxLjMsMi40LDIuNCw0LjksMy41LDcuNA0KICAgICAgICAgICAgICAgICAgICAgICAgYzUuNSwxMy4xLDguNCwyNy4zLDgsNDEuNWMtMC4xLDIuNiwwLjIsNS44LDIuNyw2LjZjMi43LDAuOSwyLjQtMjcuNSwyLTI5LjljLTAuOC00LTEuNS03LjktMi0xMS45Yy0wLjYtNC42LTMuMy03LjktNS0xMg0KICAgICAgICAgICAgICAgICAgICAgICAgYy0xLjYtMy44LTMuMy03LjUtNS43LTEwLjljLTEuNy0yLjUtMy44LTUtMy44LTcuOWMwLTEuMSwwLjMtMi4zLDAuMy0zLjRjMC02LjUtOS40LTkuMS0xMS40LTE1Yy0xLjEtMy40LTEuMy02LTMuOC04LjkNCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMy41LTQuMi04LjQtOC4zLTEyLjgtMTEuNWMtNC43LTMuNS0xMi42LTMuOS0xOC4yLTVjLTEuOC0wLjMtMy45LTAuNS01LjIsMC44YzIsMi44LDUuMiw0LjUsOC4xLDYuMw0KICAgICAgICAgICAgICAgICAgICAgICAgYzYuMiwzLjksMTEuNyw4LjgsMTYuMiwxNC41YzQuNiw1LjgsNy41LDEyLjcsMTIuNCwxOC4yQzMxMC4xLDEyMCwzMTUuMiwxMjYuOSwzMTkuMiwxMzQuNSBNMzM1LjMsMjQzLjQNCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMS4xLDAuNi0xLjcsMi40LTIuNSwzLjRjLTEuMiwxLjYtMi40LDMuMi0zLjQsNC45Yy0xLjEsMS44LTIuNywzLjItMy44LDVjLTAuMywwLjUtMC42LDEtMC44LDEuNWMtMC42LDEuNS0xLDMtMC44LDQuNg0KICAgICAgICAgICAgICAgICAgICAgICAgYzAuMSwxLjMsMC42LDIuNSwwLjcsMy43YzAuNCwyLjgtMS4xLDQuNi0yLjEsNy4xYy0xLjcsNC0zLjksNy43LTYuMSwxMS41YzAuNiwwLjMsMS4yLTAuMiwxLjYtMC43YzMuOC00LjUsNy43LTksMTEtMTMuOQ0KICAgICAgICAgICAgICAgICAgICAgICAgYzEuOS0yLjgsMy40LTYuMSw0LjYtOS4zYzEuOS01LjEsMC42LTEwLjksMi43LTE1LjdDMzM2LjgsMjQ0LjEsMzM2LjksMjQyLjUsMzM1LjMsMjQzLjQnDQogICAgPjwvcGF0aD4NCjxwYXRoIGNsaXAtcGF0aD0ndXJsKCNTVkdJRF8yXyknIGZpbGw9JyM3RkE5QzgnIGQ9J001NS43LDE3NS41Yy0wLjUsMy42LTAuOCw3LjItMC45LDEwLjhjLTAuNiwxMy42LTAuOCwyNy0wLjcsNDAuNQ0KICAgICAgICAgICAgICAgICAgICAgICAgYzAsMi0xLjIsMi0xLjcsMS43Yy0xLjUtMC45LTIuNi0yLjQtMy4xLTQuMWMtMS44LTUuNi0xLjctMTIuNC0zLjMtMTguNGMtMS44LTctMy4yLTE0LjItMy43LTIxLjVjLTEuMS0xMy40LDAuMi0yNy4zLDYtMzkuNg0KICAgICAgICAgICAgICAgICAgICAgICAgYzIuMi00LjcsNS41LTguNyw4LjktMTIuNmM0LjMtNC45LDguOC05LjcsMTMuNC0xNC4zYzIuOS0yLjgsNi44LTkuNCwxMC43LTExLjFjMC44LTAuNCwwLjksMCwxLDAuMmMwLjMsMy41LTMsNS41LTMuNyw4LjkNCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMC4zLDEuNiwwLDMuMiwwLDQuOGMwLjMsMTAtMTEuOSwxNy40LTE1LjYsMjYuM0M1OS4yLDE1Ni4yLDU3LDE2NS44LDU1LjcsMTc1LjUgTTkwLjksOTcuMWMwLjksMS4yLDQuNC0wLjgsNS40LTEuMw0KICAgICAgICAgICAgICAgICAgICAgICAgYzEuNS0wLjksMi0yLjEsMi44LTMuNGMwLjYtMS4xLDEuNC0yLjEsMi0zLjFjMC44LTEuMSwxLjUtMi4yLDIuMy0zLjNjMC4yLTAuMywwLjUtMC45LDAuMy0xLjFjLTAuMi0wLjItMSwwLjQtMS41LDAuNw0KICAgICAgICAgICAgICAgICAgICAgICAgYy0xLjUsMC45LTMuMiwxLjYtNC44LDIuNGMtMy40LDEuNi02LjMsMy4yLTYuOCw3LjJjLTAuMSwwLjUtMC4xLDEuMSwwLjEsMS42QzkwLjcsOTYuOCw5MC44LDk3LDkwLjksOTcuMSBNMzMwLjcsMTgzLjUNCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMC4xLDIuNiwwLjIsNS44LDIuNyw2LjZjMi43LDAuOSwyLjQtMjcuNSwyLTI5LjljLTAuOC00LTEuNS03LjktMi0xMS45Yy0wLjYtNC42LTMuMy03LjktNS0xMmMtMS42LTMuOC0zLjMtNy41LTUuNy0xMC45DQogICAgICAgICAgICAgICAgICAgICAgICBjLTEuNy0yLjUtMy44LTUtMy44LTcuOWMwLTEuMSwwLjMtMi4zLDAuMy0zLjRjMC02LjUtOS40LTkuMS0xMS40LTE1Yy0xLjEtMy40LTEuMy02LTMuOC04LjljLTMuNS00LjItOC40LTguMy0xMi44LTExLjUNCiAgICAgICAgICAgICAgICAgICAgICAgIGMtNC43LTMuNS0xMi42LTQtMTguMi01Yy0xLjgtMC4zLTMuOS0wLjUtNS4yLDAuOGMyLDIuOCw1LjIsNC41LDguMSw2LjNjNi4yLDMuOSwxMS43LDguOCwxNi4yLDE0LjUNCiAgICAgICAgICAgICAgICAgICAgICAgIGM0LjYsNS44LDcuNSwxMi43LDEyLjQsMTguMmM1LjcsNi41LDEwLjcsMTMuNCwxNC44LDIxLjFjMS4zLDIuNCwyLjQsNC45LDMuNSw3LjRDMzI4LjMsMTU1LjEsMzMxLjEsMTY5LjMsMzMwLjcsMTgzLjUNCiAgICAgICAgICAgICAgICAgICAgICAgICBNMzI0LjgsMjU4LjFjLTAuNiwxLjUtMSwzLTAuOCw0LjZjMC4xLDEuMiwwLjYsMi40LDAuNywzLjdjMC40LDIuOC0xLjEsNC42LTIuMSw3LjFjLTEuNyw0LTMuOSw3LjctNi4xLDExLjUNCiAgICAgICAgICAgICAgICAgICAgICAgIGMwLjYsMC4zLDEuMi0wLjIsMS42LTAuN2MzLjgtNC41LDcuNy05LDExLTEzLjljMS45LTIuOSwzLjQtNi4xLDQuNi05LjNjMS45LTUuMSwwLjYtMTAuOSwyLjctMTUuN2MwLjUtMS4yLDAuNi0yLjktMS0yDQogICAgICAgICAgICAgICAgICAgICAgICBjLTEuMSwwLjYtMS43LDIuNC0yLjUsMy40Yy0xLjIsMS42LTIuNCwzLjItMy40LDQuOWMtMS4xLDEuOC0yLjcsMy4yLTMuOCw1QzMyNS4zLDI1Ny4xLDMyNSwyNTcuNiwzMjQuOCwyNTguMScNCiAgICA+PC9wYXRoPg0KPHBhdGggY2xpcC1wYXRoPSd1cmwoI1NWR0lEXzJfKScgZmlsbD0nI0ZGRkZGRicgZD0nTTIzMS41LDE0Ny4zYy0xMi02LjMtMjItNi4zLTMzLjgtNS4zYy0xMS44LDEtMjAuNiw0LjgtMjIuNyw4LjYNCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMi4xLDMuOC00LjEsNC43LTQuNyw0LjZjLTAuNy0wLjEtMS4xLDAuMy0xLjUtNC4zYy0wLjQtNC42LTAuOC01LTMuMi02LjhjLTQuMy0zLjMtMjAuMS0xLTI0LjgtMC42Yy00LjIsMC40LTUuOS0wLjQtNi40LTEuOA0KICAgICAgICAgICAgICAgICAgICAgICAgYy0wLjUtMS40LTAuMy00LjcsNy4xLTEyYzcuNC03LjMsMTkuNC0xNywzNC0yMy41YzE1LjUtNi45LDI2LTUuNywzMC4xLTQuM2M0LjEsMS4zLDYuMyw2LjQsOS40LDEwLjdjMyw0LjMsNi40LDguMiw4LjIsNy40DQogICAgICAgICAgICAgICAgICAgICAgICBjMS43LTAuOC0yLjQtOCwwLjgtOS43YzMuMi0xLjcsOSw5LDEyLjcsMTIuN2MzLjcsMy43LDcuNCw1LjYsMTEuMSw2LjljMy43LDEuMywzLjUtMC42LDEuNS0zLjZjLTItMy00LjUtOS45LTIuNS0xMS4xDQogICAgICAgICAgICAgICAgICAgICAgICBjMi0xLjIsNC45LDEuMyw3LDMuNWMyLDIuMiw3LjcsMTAsMTAuOSwyMi42YzMuMSwxMi42LDEuMiwxNy44LTIsMTkuM0MyNTYuNCwxNjMuMywyNDMuMiwxNTMuNCwyMzEuNSwxNDcuMyBNMTMzLjQsMTc1LjkNCiAgICAgICAgICAgICAgICAgICAgICAgIGMzLjUtMS4yLDEwLTMuMiwxMy40LTRjMy40LTAuOCw4LTAuOSw5LjktMC42YzEuOCwwLjIsMS45LTEuNiwwLjktMmMtMS0wLjQtNy45LTIuMi0xMS0zLjJjLTMuMS0xLTQuNC0wLjQtNS42LTAuMQ0KICAgICAgICAgICAgICAgICAgICAgICAgYy0xLjIsMC4zLTcuMSwyLjItOS45LDMuMWMtMi45LDEtMy43LDIuNC0yLjcsNUMxMjguOCwxNzUuMywxMjkuOSwxNzcsMTMzLjQsMTc1LjkgTTIxMS43LDE2OS4yYzAuMywxLjQsMy42LDEsNi45LDAuMw0KICAgICAgICAgICAgICAgICAgICAgICAgYzMuNC0wLjYsOC4yLTEuNCw5LjUsMC43YzEuMywyLjIsMy41LDYuNCw3LjUsOS42czksNS44LDE0LjYsNS42YzUuNy0wLjIsNC45LTEuOCw0LjgtMi4zYy0wLjEtMC41LTEuMy0wLjctMi4zLTAuNg0KICAgICAgICAgICAgICAgICAgICAgICAgYy0xLDAtNi45LTEtMTAuNy00LjRjLTMuNy0zLjQtNy4yLTcuOC05LjItMTBjLTItMi4xLTQuNC00LjctMTAuMy00LjFDMjE2LjcsMTY0LjcsMjExLjEsMTY2LjUsMjExLjcsMTY5LjIgTTI1MC4zLDE3Ni4xDQogICAgICAgICAgICAgICAgICAgICAgICBjMCwxLjMsMy44LDIuNCw5LjEsMS43YzUuMi0wLjcsNy42LTEuMyw3LjQtMy4xYy0wLjItMS44LTIuOC0xLjYtNS0xLjJjLTIuMSwwLjMtOC40LDEuMy05LjIsMS4zDQogICAgICAgICAgICAgICAgICAgICAgICBDMjUxLjgsMTc0LjgsMjUwLjMsMTc1LDI1MC4zLDE3Ni4xIE0xMzUuNywyNTMuNmMxLjItMC41LDEuOS0wLjgsMi45LTEuNWMxLjYtMS4xLDIuMy0xLjcsMy41LTIuOGMxLjItMS4xLDEuOS0yLjIsMy4yLTQuOA0KICAgICAgICAgICAgICAgICAgICAgICAgYzEuMy0yLjYsMC40LTQuNC0wLjUtNmMtMC45LTEuNi0yLjQtMC4zLTMuNCwwLjNjLTEsMC42LTQsMi44LTYuMiw0LjRjLTIuMSwxLjYtMi45LDMuNy0zLjUsNS41Yy0wLjYsMS44LTAuNiw0LjQsMC44LDUuMQ0KICAgICAgICAgICAgICAgICAgICAgICAgQzEzMy40LDI1NC40LDEzNC43LDI1NCwxMzUuNywyNTMuNiBNMjA1LDI1Ni41YzMuOS0wLjIsOC4xLTEuNywxMC45LTIuOGMyLjgtMS4yLDMuNy0xLjgsNC4yLTIuOWMwLjUtMS4xLTAuMi01LjEtMC42LTYuNw0KICAgICAgICAgICAgICAgICAgICAgICAgYy0wLjUtMS42LTIuNS0zLjMtMy43LTQuNWMtMS4zLTEuMi0zLjYtMy00LTMuMmMtMS40LTEtMy4yLTEuMi0xMi42LTAuNGMtOS40LDAuOC0xMywyLjMtMTcuOSw0LjNjLTQuOSwyLTUuOSw0LjMtOC4zLDYuMg0KICAgICAgICAgICAgICAgICAgICAgICAgYy0yLjUsMS45LTUuOSwzLTcuNCw1Yy0xLjIsMS42LTAuMSwxLjksMC43LDJDMTgxLjYsMjU1LjgsMjAxLjEsMjU2LjYsMjA1LDI1Ni41IE0xNzUuMSwxNjMuN2MtMi4zLDAuMS0zLjYsMy4zLTQuNSw4LjINCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMC45LDQuOS0xLjMsOS40LTMuNiwxMC44Yy0yLjQsMS40LTQuOCwwLjctNi4xLDAuM2MtMS4zLTAuNC0yLjgtMS4xLTUtMC45Yy0yLjIsMC4xLTMuNiwwLjEtNy42LDIuM2MtNCwyLjItNSwzLjEtOC42LDMuOQ0KICAgICAgICAgICAgICAgICAgICAgICAgYy0zLjYsMC44LTQuNywwLjktNS43LDFjLTEsMC4xLTEuNS0wLjEtMi4xLDIuMmMtMC42LDIuMy0xLjksNC44LTMuMyw1Yy0xLjQsMC4yLTIuMy0wLjYtMy0xYy0wLjctMC41LTMuNC0yLjYtNC45LTMuMw0KICAgICAgICAgICAgICAgICAgICAgICAgYy0xLjUtMC42LTQuNS0xLjQtNy4xLDEuMWMtMi42LDIuNS02LjcsOS40LTguMSwxOS4yYy0xLjUsOS44LTIuNSwxOS4yLDAuMSwyMC4xYzIuNSwwLjksNi42LTExLjEsMTAuNy05LjQNCiAgICAgICAgICAgICAgICAgICAgICAgIGMzLjYsMS41LDEuOSwzMC42LDEuNywzNi45Yy0wLjMsNi4zLTEuNSwxNS43LDEsMjIuMmMyLjUsNi41LDQuOCw5LjYsMTQuOCwxNy44YzEwLDguMiwxMS43LDkuOCwxMy45LDEyYzIuMiwyLjIsOCw2LjEsOS41LDYuOA0KICAgICAgICAgICAgICAgICAgICAgICAgYzEuNSwwLjcsNC44LDEuMyw2LjItMi4xYzEuNC0zLjQsMi4yLTcsNi40LTEwLjNjNC4zLTMuMyw1LjMtNi4yLDQuMi04LjFjLTEuMS0xLjktMi45LTItNS44LTEuNWMtMi45LDAuNS03LjksMi4yLTE1LjYsMQ0KICAgICAgICAgICAgICAgICAgICAgICAgYy03LjctMS4yLTE5LjMtNC4zLTIwLjMtOS43Yy0wLjctMy44LDIuMy03LjYsMy0xMC43YzAuNi0yLjksMi41LTktMC43LTExLjZjLTIuMS0xLjctMy45LDAuOC01LDIuM2MtMS4xLDEuNS00LDMtMy45LTENCiAgICAgICAgICAgICAgICAgICAgICAgIGMwLjEtMy45LDAuMi04LjEsMC42LTExLjdjMC4zLTIuNS0wLjMtNy45LTAuNy05LjljLTAuNC0yLDAuMy01LjUsMi41LTdjMi4zLTEuNSw3LTMuOCw4LjgtNC45YzEuOC0xLjEsMy43LTIuMiwzLjgtNS4xDQogICAgICAgICAgICAgICAgICAgICAgICBjMC4xLTIuOSwyLjItOC40LDMuNi0xMWMxLjQtMi41LDIuMi00LjYsMi4zLTZjMC4yLTEuNCwxLTIuNiwzLjMtM2MyLjMtMC40LDMuMi0wLjMsMi42LDEuNmMtMC42LDEuOS0xLjksNC4zLTEuOCw2LjENCiAgICAgICAgICAgICAgICAgICAgICAgIGMwLjEsMS45LDEuMSwyLjksMi45LDMuOGMxLjcsMSwzLjUsMiw3LjksMC41YzQuNC0xLjUsMTAuNC0zLjYsMTQuMi0zLjNjNC40LDAuMyw3LjcsMi42LDEwLjgsMy41YzIuMywwLjcsMi42LDAuOCw2LjgsMS45DQogICAgICAgICAgICAgICAgICAgICAgICBjMi4xLDAuNiwzLjQsMC4xLDMuOS0wLjNjMC41LTAuNCwxLjItMS4zLDAuOC0zYy0wLjQtMS43LTIuNC01LjQtMC42LTYuMmMxLjgtMC44LDMuNywxLjcsNS4xLDVjMS40LDMuNCwzLjgsOC42LDUuOCwxMC44DQogICAgICAgICAgICAgICAgICAgICAgICBjMiwyLjIsNC45LDMsOC4zLDQuMmMzLjQsMS4yLDUuNiwwLjksNyw2LjdjMS40LDUuOCwxLjYsNy44LDEuNywxMC41YzAuMSw1LjgtMSw2LjctMSwxMC44YzAsNC44LDAuNSw2LjMtMS4zLDguNA0KICAgICAgICAgICAgICAgICAgICAgICAgYy0wLjYsMC43LTEuMywxLjMtMiwwLjdjLTAuNy0wLjYtMC4xLTEuMiwwLjItMi4xYzAuNS0xLjMsMC4yLTMuMiwwLjEtNS42Yy0wLjEtMS43LTAuMS0xLjgtMC4yLTIuMmMtMC4xLTEtMC42LTEuNS0xLjQtMS40DQogICAgICAgICAgICAgICAgICAgICAgICBjLTEuOCwwLjItMi45LDEuNi01LjYsMS44Yy0yLjcsMC4yLTguOCwwLjMtMTIuNiwwLjZjLTMuNywwLjMtMTEuNywwLjgtMTcuOSwxYy02LjEsMC4yLTEwLjYsMC4yLTE2LjgtMC40DQogICAgICAgICAgICAgICAgICAgICAgICBjLTYuMi0wLjctNy40LTEtOC41LTFjLTEuMiwwLTYuNywwLjYtNy43LDQuNGMtMC41LDItMC4zLDIuOCwxLjEsMy4xYzEuNCwwLjMsNy41LDAuNywxMC40LDEuMWMyLjksMC40LDkuNCwxLjMsMTIuNiwxLjQNCiAgICAgICAgICAgICAgICAgICAgICAgIGMzLjIsMCw3LjMtMC4yLDkuNy0wLjNjMi4zLDAsNy44LDAuNCw4LDguMWMwLDIuNiwwLjIsNC45LDIsNi4yYzEuOCwxLjMsOC43LDQuNiwxNC45LDcuM2M2LjIsMi43LDEyLDMuMSwxNS4yLDEuOA0KICAgICAgICAgICAgICAgICAgICAgICAgYzMuMi0xLjMsNC4zLTMuMywzLjMtNi4zYy0xLjEtMy0xLjItNS4yLDAuMS02LjJjMS4zLTEsMi43LTIuMSw4LjctMS44YzMuMywwLjIsNy43LDEuOCw5LjctMS4xYzIuNy0zLjksMy00LjYsOC04DQogICAgICAgICAgICAgICAgICAgICAgICBjNS0zLjQsNy41LTUuNyw3LjMtMTQuMmMtMC4yLTguNy0xLTIzLjUsMC4yLTMyLjhjMS4yLTguOSw2LjgtMTMuMywxMC0xOS41YzIuOC01LjQsNC04LjIsMC0xMC4zYy00LTIuMi01LjYtMy4zLTguNC0zLjkNCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMi42LTAuNi0zLjQtMC40LTQuNy0wLjZjLTEuMi0wLjItMS41LTAuMi0xLjcsMC4xYy0wLjEsMC4zLDAuMiwwLjcsMS40LDEuNGMxLjIsMC43LDMuNSwyLDQuOSwzLjNjMS40LDEuMywyLjgsMi43LDEuOSw0LjENCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMC44LDEuNC0zLjYsMC45LTUuNi0wLjJjLTItMS4xLTQuOC0zLjMtNS45LTMuOGMtMS4xLTAuNC0xLjktMC41LTEuNiwwLjZjMC4zLDEuMSwwLjgsMi40LDAsM2MtMC44LDAuNy0zLjMsMC43LTUuNi0xLjINCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMi4yLTEuOS0yLjktMy4yLTUuOC01LjZjLTItMS43LTMuOS0yLjQtNS40LTMuNWMtMS41LTEuMS0yLjktMi40LTUtM2MtMi4xLTAuNi04LjEtMS44LTE2LjgtMC40Yy04LjcsMS41LTEwLjcsMy4xLTEzLjQsMi44DQogICAgICAgICAgICAgICAgICAgICAgICBjLTEuNi0wLjItMS45LTAuNy0yLjQtMi4zYy0wLjUtMS42LTAuOC0xLjgtMS43LTIuMmMtMC44LTAuNC0xLjgtMC4yLTMuMy0wLjljLTEuNS0wLjctNC45LTEuNy04LjYtNy4xDQogICAgICAgICAgICAgICAgICAgICAgICBjLTIuOC00LjEtMy44LTYuNi01LjEtOC41QzE3Ny43LDE2NC4xLDE3Ni44LDE2My42LDE3NS4xLDE2My43IE0yMzIsMjY5LjhjLTAuNCwwLTMsMC0xLjgtMi44YzEuMS0yLjgsMS43LTksMS41LTE0LjQNCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMC4xLTUuNC0xLTguNS0xLjUtMTAuN2MtMC41LTIuMi0wLjctMi42LDAtMy4zYzAuNi0wLjcsMC45LTAuOCwyLjEtMWMwLjctMC4xLDAuOCwwLjgsMS42LDNjMC44LDIuMiwzLDUuNiwyLjksMTMuNA0KICAgICAgICAgICAgICAgICAgICAgICAgYy0wLjEsNy44LTAuMywxMi4yLTAuNywxMy42Yy0wLjQsMS40LTAuNywyLjMtMS43LDIuM0MyMzQsMjY5LjgsMjMyLjUsMjY5LjgsMjMyLDI2OS44IE0xMzQuNywxOTUuMWMxLjYsMCwzLjctMC4zLDguOC0xLjYNCiAgICAgICAgICAgICAgICAgICAgICAgIGM1LjEtMS4zLDcuMy0zLjIsOC4xLTMuOWMwLjgtMC43LDEtMC44LDEuOS0wLjFjMC45LDAuNiwxLjcsMC44LDMsMS42YzEuMywwLjgsMS41LDIsMC40LDMuMmMtMS4xLDEuMS0zLjgsMi4yLTYuNiwzLjQNCiAgICAgICAgICAgICAgICAgICAgICAgIGMtMi45LDEuMi01LjcsMi4xLTkuNiwyLjVjLTMuOSwwLjQtNy4xLTAuNy04LjEtMS4xYy0xLTAuNC0xLjMtMS41LTAuNi0yLjhDMTMyLjgsMTk0LjgsMTMzLjgsMTk1LjEsMTM0LjcsMTk1LjEgTTIwNS41LDE5MS43DQogICAgICAgICAgICAgICAgICAgICAgICBjMi4xLDAuMSw0LTAuNCw3LTAuM2MzLjEsMC4xLDYuOCwwLjksMTEuMiwwLjFjMy4yLTAuNiw0LjItMS44LDUtMi40YzAuOC0wLjYsMS4yLTAuMywxLjksMS4zYzAuNywxLjUtMS45LDMuMi01LjQsNS4xDQogICAgICAgICAgICAgICAgICAgICAgICBjLTMuNSwxLjktNi4zLDIuMi0xMS4zLDIuNGMtNC45LDAuMi05LjMtMC42LTEwLjUtMC43Yy0xLjItMC4xLTEuNy0xLjQtMS44LTNDMjAxLjQsMTkxLDIwMy40LDE5MS43LDIwNS41LDE5MS43Jw0KICAgID48L3BhdGg+DQo8L2c+DQo8L3N2Zz4=">
			</div>
		</footer>
	</div>
	<div class="autocomplete-suggestions AsDD" style=left:0px;top:1px;width:0px></div>
	<div class="autocomplete-suggestions AsDD" style=left:0px;top:1px;width:0px></div>
	<div id=footerServerName class="server-name fine-print text-center footer-servername" aria-hidden=true>
		Q_28
	</div>
	<div id=as-datepicker class="datepicker sf-hidden" aria-hidden=true></div>
	<div id=sessionSection style=display:none tabindex=-1 aria-hidden=true></div>
	<div class="st-injected-content-generated st-install-pAcC2eE7jjZxvyeUDsqJ" data-st-install-key=pAcC2eE7jjZxvyeUDsqJ
		id=st-injected-content>
		<div class=st-default-autocomplete data-st-target-element=.st-default-search-input style=display:none>

		</div>
	</div>
	<div class="st-injected-content-generated st-install-pAcC2eE7jjZxvyeUDsqJ __st-search-container sf-hidden"
		data-st-install-key=pAcC2eE7jjZxvyeUDsqJ>
	</div>
	<div id=abineFillElement></div>
	<div class=abineContentPanel
		style=background-image:initial;background-position:initial;background-size:initial;background-repeat:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:transparent!important;margin:0px!important;padding:0px!important;opacity:1!important;z-index:2147483647!important;position:absolute;overflow:hidden!important;border-width:0px!important;visibility:visible!important;display:none>
	</div>
	<script>document.currentScript.remove(); !function () { "use strict"; (t => { const n = "singlefile-infobar", e = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAABhmlDQ1BJQ0MgcHJvZmlsZQAAKJF9kj1Iw0AYht+mSkUrDnYQcchQnSyIijqWKhbBQmkrtOpgcukfNGlIUlwcBdeCgz+LVQcXZ10dXAVB8AfEydFJ0UVK/C4ptIjx4LiH9+59+e67A4RGhalm1wSgapaRisfEbG5VDLyiDwEAvZiVmKkn0osZeI6ve/j4ehfhWd7n/hz9St5kgE8kjjLdsIg3iGc2LZ3zPnGIlSSF+Jx43KACiR+5Lrv8xrnosMAzQ0YmNU8cIhaLHSx3MCsZKvE0cVhRNcoXsi4rnLc4q5Uaa9XJbxjMaytprtMcQRxLSCAJETJqKKMCCxFaNVJMpGg/5uEfdvxJcsnkKoORYwFVqJAcP/gb/O6tWZiadJOCMaD7xbY/RoHALtCs2/b3sW03TwD/M3Cltf3VBjD3SXq9rYWPgIFt4OK6rcl7wOUOMPSkS4bkSH6aQqEAvJ/RM+WAwVv6EGtu31r7OH0AMtSr5Rvg4BAYK1L2use9ezr79u+ZVv9+AFlNcp0UUpiqAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AsHAB8H+DhhoQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAJUExURQAAAICHi4qKioTuJAkAAAABdFJOUwBA5thmAAAAAWJLR0QCZgt8ZAAAAJJJREFUOI3t070NRCEMA2CnYAOyDyPwpHj/Va7hJ3FzV7zy3ET5JIwoAF6Jk4wzAJAkzxAYG9YRTgB+24wBgKmfrGAKTcEfAY4KRlRoIeBTgKOCERVaCPgU4Khge2GqKOBTgKOCERVaAEC/4PNcnyoSWHpjqkhwKxbcig0Q6AorXYF/+A6eIYD1lVbwG/jdA6/kA2THRAURVubcAAAAAElFTkSuQmCC", o = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAABhmlDQ1BJQ0MgcHJvZmlsZQAAKJF9kj1Iw0AYht+mSkUrDnYQcchQnSyIijqWKhbBQmkrtOpgcukfNGlIUlwcBdeCgz+LVQcXZ10dXAVB8AfEydFJ0UVK/C4ptIjx4LiH9+59+e67A4RGhalm1wSgapaRisfEbG5VDLyiDwEAvZiVmKkn0osZeI6ve/j4ehfhWd7n/hz9St5kgE8kjjLdsIg3iGc2LZ3zPnGIlSSF+Jx43KACiR+5Lrv8xrnosMAzQ0YmNU8cIhaLHSx3MCsZKvE0cVhRNcoXsi4rnLc4q5Uaa9XJbxjMaytprtMcQRxLSCAJETJqKKMCCxFaNVJMpGg/5uEfdvxJcsnkKoORYwFVqJAcP/gb/O6tWZiadJOCMaD7xbY/RoHALtCs2/b3sW03TwD/M3Cltf3VBjD3SXq9rYWPgIFt4OK6rcl7wOUOMPSkS4bkSH6aQqEAvJ/RM+WAwVv6EGtu31r7OH0AMtSr5Rvg4BAYK1L2use9ezr79u+ZVv9+AFlNcp0UUpiqAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AsHAB8VC4EQ6QAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAJUExURQAAAICHi4qKioTuJAkAAAABdFJOUwBA5thmAAAAAWJLR0QCZgt8ZAAAAJtJREFUOI3NkrsBgCAMRLFwBPdxBArcfxXFkO8rbKWAAJfHJ9faf9vuYX/749T5NmShm3bEwbe2SxeuM4+2oxDL1cDoKtVUjRy+tH78Cv2CS+wIiQNC1AEhk4AQeUTMWUJMfUJMSEJMSEY8kIx4IONroaYAimNxsXp1PA7PxwfVL8QnowwoVC0lig07wDDVUjAdbAnjwtow/z/bDW7eI4M2KruJAAAAAElFTkSuQmCC", i = "SingleFile", A = "single-file-ui-element", r = "\n\t.infobar {\n\t\tbackground-color: #737373;\n\t\tcolor: white;\n\t\tdisplay: flex;\n\t\tposition: fixed;\n\t\ttop: 16px;\n\t\tright: 16px;\n\t\theight: auto;\n\t\twidth: auto;\n\t\tmin-height: 24px;\n\t\tmin-width: 24px;\n\t\tbackground-position: center;\n\t\tbackground-repeat: no-repeat;\n\t\tz-index: 2147483647;\n\t\tmargin: 0 0 0 16px;\n\t\tbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAABhmlDQ1BJQ0MgcHJvZmlsZQAAKJF9kj1Iw0AYht+mSkUrDnYQcchQnSyIijqWKhbBQmkrtOpgcukfNGlIUlwcBdeCgz+LVQcXZ10dXAVB8AfEydFJ0UVK/C4ptIjx4LiH9+59+e67A4RGhalm1wSgapaRisfEbG5VDLyiDwEAvZiVmKkn0osZeI6ve/j4ehfhWd7n/hz9St5kgE8kjjLdsIg3iGc2LZ3zPnGIlSSF+Jx43KACiR+5Lrv8xrnosMAzQ0YmNU8cIhaLHSx3MCsZKvE0cVhRNcoXsi4rnLc4q5Uaa9XJbxjMaytprtMcQRxLSCAJETJqKKMCCxFaNVJMpGg/5uEfdvxJcsnkKoORYwFVqJAcP/gb/O6tWZiadJOCMaD7xbY/RoHALtCs2/b3sW03TwD/M3Cltf3VBjD3SXq9rYWPgIFt4OK6rcl7wOUOMPSkS4bkSH6aQqEAvJ/RM+WAwVv6EGtu31r7OH0AMtSr5Rvg4BAYK1L2use9ezr79u+ZVv9+AFlNcp0UUpiqAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AsHADIRLMaOHwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAPUExURQAAAIqKioyNjY2OjvDw8L2y1DEAAAABdFJOUwBA5thmAAAAAWJLR0QB/wIt3gAAAGNJREFUSMdjYCAJsLi4OBCQx6/CBQwIGIDPCBcXAkYQUsACU+AwlBVQHg6Eg5pgZBGOboIJZugDFwRwoJECJCUOhJI1wZwzqmBUwagCuipgIqTABG9h7YIKaKGAURAFEF/6AQAO4HqSoDP8bgAAAABJRU5ErkJggg==);\n\t\tborder-radius: 16px;\n\t\tuser-select: none;\n\t\t-moz-user-select: none;\n\t\topacity: .7;\n\t\tcursor: pointer;\n\t\tpadding-left: 0;\n\t\tpadding-right: 0;\n\t\tpadding-top: 0;\n\t\tpadding-bottom: 0;\n\t\tborder: 2px solid #eee;\n\t\tbackground-size: 70% 70%;\n\t\ttransition: all 250ms;\n\t\tfont-size: 13px;\n\t}\n\t.infobar:hover {\n\t\topacity: 1;\n\t}\n\t.infobar-open {\n\t\topacity: 1;\n\t\tbackground-color: #f9f9f9;\n\t\tcursor: auto;\n\t\tcolor: #2d2d2d;\n\t\tpadding-top: 2px;\n\t\tpadding-bottom: 2px;\n\t\tborder: 2px solid #878787;\n\t\tbackground-image: none;\n\t\tborder-radius: 8px;\n\t\tuser-select: initial;\n\t\t-moz-user-select: initial;\n\t}\n\t.infobar-close-button {\n\t\tdisplay: none;\n\t\topacity: .7;\n\t\tpadding-top: 4px;\n\t\tpadding-left: 8px;\n\t\tpadding-right: 8px;\n\t\tcursor: pointer;\n\t\ttransition: opacity 250ms;\n\t\theight: 16px;\n\t}\n\t.infobar-close-button:hover {\n\t\topacity: 1;\n\t}\n\t.infobar-content {\n\t\tdisplay: none;\n\t\tfont-family: Arial;\n\t\tfont-size: 14px;\n\t\tline-height: 22px;\n\t\tword-break: break-word;\n\t\twhite-space: pre-wrap;\n\t\tposition: relative;\n\t\ttop: 1px;\n\t\ttext-align: left;\n\t}\n\t.infobar-link {\n\t\tdisplay: none;\n\t\tpadding-left: 8px;\n\t\tpadding-right: 8px;\n\t\tline-height: 11px;\n\t\tcursor: pointer;\n\t\tuser-select: none;\n\t\toutline: 0;\n\t}\n\t.infobar-link-icon {\n\t\tpadding-top: 4px;\n\t\tpadding-left: 2px;\n\t\tcursor: pointer;\n\t\topacity: .7;\n\t\ttransition: opacity 250ms;\n\t\theight: 16px;\n\t}\n\t.infobar-link-icon:hover {\n\t\topacity: 1;\n\t}\n\t.infobar-open .infobar-close-button, .infobar-open .infobar-content, .infobar-open .infobar-link {\n\t\tdisplay: inline-block;\n\t}"; let a = !0; const c = t.browser; async function s() { const t = document.evaluate("//comment()", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null); let s = t && t.singleNodeValue; if (s && ((p = s).nodeType == Node.COMMENT_NODE && p.textContent.includes(i))) { const t = s.textContent.split("\n"), [, , i, p, ...g] = t; if (i && p) { let t; t = c && c.runtime && c.runtime.sendMessage ? await c.runtime.sendMessage({ method: "tabs.getOptions", url: i }) : { displayInfobar: !0 }, t.displayInfobar && await async function (t, i, c) { let s = document.querySelector(n); if (!s) { if (t = t.split("url: ")[1], i = i.split("saved date: ")[1], c && c.length > 1) { let t = c[0].split("info: ")[1].trim(); for (let n = 1; n < c.length - 1; n++)t += "\n" + c[n].trim(); c = t.trim() } else c = i; s = d(n, document.body), s.className = A; const p = await async function (t) { if (t.attachShadow) return t.attachShadow({ mode: "open" }); { a = !1; const n = d("iframe", t); return n.style.setProperty("background-color", "transparent", "important"), n.style.setProperty("position", "fixed", "important"), n.style.setProperty("top", 0, "important"), n.style.setProperty("right", 0, "important"), n.style.setProperty("width", "44px", "important"), n.style.setProperty("height", "48px", "important"), n.style.setProperty("z-index", 2147483647, "important"), new Promise((t => { n.contentDocument.body.style.setProperty("margin", 0), n.onload = () => t(n.contentDocument.body) })) } }(s), g = document.createElement("style"); g.textContent = r, p.appendChild(g); const u = document.createElement("div"); u.classList.add("infobar"), p.appendChild(u); const h = document.createElement("img"); h.classList.add("infobar-close-button"), u.appendChild(h), h.src = o, h.onclick = t => { 0 === t.button && s.remove() }; const m = document.createElement("span"); u.appendChild(m), m.classList.add("infobar-content"), m.textContent = c; const b = document.createElement("a"); b.classList.add("infobar-link"), u.appendChild(b), b.target = "_blank", b.rel = "noopener noreferrer", b.title = "Open source URL: " + t, b.href = t; const f = document.createElement("img"); f.classList.add("infobar-link-icon"), b.appendChild(f), f.src = e, l(u), document.addEventListener("click", (t => { if (0 === t.button) { let n = t.target; for (; n && n != s;)n = n.parentElement; n != s && l(u) } })) } }(i, p, g) } } var p } function l(t) { if (t.classList.remove("infobar-open"), t.onclick = e => { if (0 === e.button) return function (t) { a || document.querySelector(n).childNodes[0].contentWindow.getSelection().removeAllRanges(); if (t.classList.add("infobar-open"), t.onclick = null, t.onmouseout = null, !a) { const e = document.querySelector(n).childNodes[0]; e.style.setProperty("width", "100vw", "important"), e.style.setProperty("height", "100vh", "important"), e.style.setProperty("width", t.getBoundingClientRect().width + 33 + "px", "important"), e.style.setProperty("height", t.getBoundingClientRect().height + 21 + "px", "important") } }(t), !1 }, !a) { const t = document.querySelector(n).childNodes[0]; t.style.setProperty("width", "44px", "important"), t.style.setProperty("height", "48px", "important") } } function d(t, n) { const e = document.createElement(t); return n.appendChild(e), Array.from(getComputedStyle(e)).forEach((t => e.style.setProperty(t, "initial", "important"))), e } t.window == t.top && ("loading" == document.readyState ? document.addEventListener("DOMContentLoaded", s, !1) : s()) })("object" == typeof globalThis ? globalThis : window) }();</script>
	`

export default alaskaAirlinesPage_2_rawHtml