const Mask = {
   apply(input, func) {
      setTimeout(function() {
	 input.value = Mask[func](input.value)
      }, 1)
   },
   formatBRL(value) {
      value = value.replace(/\D/g, "")

      return value = new Intl.NumberFormat('pt-BR', {
	 style: 'currency',
	 currency: 'BRL'
      }).format(value/100)

   }
}

const PhotosUpload = {
   input: '',
   uploadLimit: 6,
   preview: document.querySelector('#photos-preview'),
   files: [],
   handleFileInput(event) {
      const { files: fileArr } = event.target
      PhotosUpload.input = event.target 

      if (PhotosUpload.hasLimit(event)) return

      Array.from(fileArr).forEach(file => {

	 PhotosUpload.files.push(file)

	 const reader = new FileReader()
	 reader.onload = () => {
	    const image = new Image()
	    image.src = String(reader.result)
	    const container = PhotosUpload.getContainer(image)
	    PhotosUpload.preview.appendChild(container)

	 }

	 reader.readAsDataURL(file)
      })

      PhotosUpload.input.files = PhotosUpload.getAllFiles()
   },
   hasLimit(event) {
      const { uploadLimit, input: fileArr } = PhotosUpload

      if (fileArr.length > uploadLimit) {
	 alert(`Envie no máximo ${uploadLimit} photos`)
	 event.preventDefault()
	 return true
      }

      return false

   },
   getAllFiles(){
      const dataTransfer = new ClipboardEvent("").clipboardData || new DataTransfer()

      PhotosUpload.files.forEach(file => dataTransfer.items.add(file))

      return dataTransfer.files
   },
   getContainer(image){
      const container = document.createElement('div')
      container.classList.add('photo')
      container.onclick = PhotosUpload.removePhoto
      container.appendChild(image)
      container.appendChild(PhotosUpload.getRemoveButton())
      return container
   },
   getRemoveButton(){
      const button = document.createElement('i')
      button.classList.add('material-icons')
      button.innerHTML = 'close'
      return button
   },
   removePhoto(event){
      const photoDiv = event.target.parentNode // <div class='photo' />
      const photosArray = Array.from(PhotosUpload.preview.children)
      const index = photosArray.indexOf(photoDiv)


      PhotosUpload.files.splice(index, 1)
      PhotosUpload.input.files = PhotosUpload.getAllFiles()
      photoDiv.remove()
   }
}
