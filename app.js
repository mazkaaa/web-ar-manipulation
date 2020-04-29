let objectSpawned = false

AFRAME.registerComponent('tap-place', {
	init: function(){
		const ground = document.getElementById('ground')
		ground.addEventListener('click', event => {
			const newElement = document.createElement('a-entity')
			const touchPoint = event.detail.intersection.point
			newElement.setAttribute('position', touchPoint)
			newElement.setAttribute('visible', 'false')
			newElement.setAttribute('scale', '0.0001 0.0001 0.0001')

			newElement.setAttribute('class', 'cantap')

			newElement.setAttribute('hold-drag')
			newElement.setAttribute('two-finger-spin')
			newElement.setAttribute('pinch-scale')

			newElement.setAttribute('gltf-model', '#sandCastleModel')
			this.el.sceneEl.appendChild(newElement)
			newElement.addEventListener('model-loaded', () => {
				newElement.setAttribute('visible', 'true')
				newElement.setAttribute('animation', {
					property: 'scale',
					to: '0.025 0.025 0.025',
					easing: 'easeOutElastic',
					dur: 800,
				})
			})
		})
	}
})