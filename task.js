const check = document.getElementsByClassName("interest__check");


for (let i = 0; i < check.length; i++) {
    check[i].onchange = () => {
        if (check[i].closest(".interest").closest(".interests_active") == null){
            if (check[i].checked) {
                for (let j = 0; j < check[i].closest("label").nextElementSibling.children.length; j++){
                    check[i].closest("label").nextElementSibling.children[j].children[0].children[0].checked = true;
                }
            } else {
                for (let j = 0; j < check[i].closest("label").nextElementSibling.children.length; j++){
                    check[i].closest("label").nextElementSibling.children[j].children[0].children[0].checked = false;
                }
            }
        }

    };
}






