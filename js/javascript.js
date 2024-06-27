function increaseQuantity(b) {
    const quantityElement = b.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    quantity = quantity + 1;
    quantityElement.textContent = quantity;
}
function decreaseQuantity(button) {
    const quantityElement = button.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);

    if (quantity > 0) {
        quantity -= 1;
        quantityElement.textContent = quantity;
    }
}

document.addEventListener("click", event => {
    if (event.target.classList.contains("fa-plus-circle")) {
        increaseQuantity(event.target);
    } else if (event.target.classList.contains("fa-minus-circle")) {
        decreaseQuantity(event.target);
    }
    else if (event.target.classList.contains("fa-trash-alt")) {
        supr(event.target);

    }
});

function supr(b) {
    var boss = b.closest('.list-products');

    var mini = boss.querySelector('.card-body');
    if (mini) {
        boss.removeChild(mini)
    }

    console.log('aa')
}

