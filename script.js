const textT = document.getElementById('text');
const counter = document.querySelector('.counter');
const container = document.querySelector('.container');

function updateCounter()
{
    const maxLength = 250;
    const currentLength = textT.value.length;

    counter.textContent = `${currentLength} / ${maxLength}`;

    if (currentLength <= maxLength)
    {
        counter.style.borderColor = 'black';
        textT.style.color = 'black';

    }
    if (currentLength >= maxLength)
    {
        textT.style.color = 'red'
        container.style.borderColor = 'red'
        counter.style.color = 'red'
        textT.value =  textT.value.substring(0, maxLength);
    }
    else
    {
        container.style.borderColor = '';
        counter.style.color = '';
    }
}


textT.addEventListener('input', updateCounter)
textT.addEventListener('keydown', updateCounter)

updateCounter();
