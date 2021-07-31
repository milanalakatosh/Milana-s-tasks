//Дано предложение. Заменить группы пробелов одиночными, крайние пробелы удалить. 
//Все слова перевести в нижний регистр, первые буквы сделать заглавными.
import _ from "lodash";

let sentence = "    моРОз    И  солнце -  день чудесный     ";
sentence = _.trim(_.capitalize(sentence));
while (sentence.includes("  ")) {
    sentence = sentence.replace("  ", " ");
}
console.log(sentence);