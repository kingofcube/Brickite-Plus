const content = document.getElementsByClassName("inline")[2] 

let guide = document.createElement("a")
guide.href = "/forum/thread/3033/"
guide.innerText = "Guide"

if (content)
	content.appendChild(guide)