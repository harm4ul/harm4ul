function Block(letter, rate, used, father, code) { 

this.letter = letter;

this.rate = rate;

this.used = used;

this.father = father;

this.Code = code;

function FindCode(block) {

if (tree[block.father]code != "") {

block.code = tree[block, father].code + "1";

}

else {

if (block.letter == tree[minlndex].letter) 

{ block.Code = "0";

}

else if (block.letter == tree[preminlndex].letter) { 

block.Code = "1";

}

else {

Find.Code(tree[block.father]);

block.code = tree[block.father].code + "0";

}
}
}
