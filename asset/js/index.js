function setColor(event)
{
    let element = event.target
    let color = element.style.backgroundColor

    let showColor = document.getElementById('showColor')
    showColor.style.backgroundColor = color
}

function validate(event)
{
    let username =  event.target.value
    if (username.length > 5 && username.length < 8)
    {
        document.getElementById('error').innerHTML = 'Username nhập vào đã thỏa mãn'
    } else {
        document.getElementById('error').innerHTML = 'Username nhập vào phải lớn hơn 5 và nhỏ 8 kí tự'
    }
}

function hover(event)
{
    event.target.style.color = 'yellow'
}

function keyDown(event)
{
    console.log(event.target.value)
}

function coppy(event)
{
    console.log(event.target)
    document.getElementById('coppy').innerHTML = "Bạn đã coppy thành công"
}

let button = document.getElementById('button')


button.addEventListener('dblclick', function (event) {
    event.target.innerHTML = 'Clicked'
})