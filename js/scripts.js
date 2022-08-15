const nome = 'IZAAC SANCHES';
let idade = 23;
let cidade = 'São Paulo - SP';
const linkedIn = 'https://www.linkedin.com/in/zacqq/';
const gitHub = 'https://github.com/zacqq/';
let skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'React.JS',
];
let saudacao = confirm(`Está com calma para me dizer o seu nome?`);
let nomeVisitante = '';

let chamarCurriculo = () => {
    console.log(`Olá, amigo, que bom te ver por aqui! Obrigado por visitar o meu projeto!`);
    console.log(`Me chamo ${nome}, tenho`, idade, `anos de idade e moro na cidade de ${cidade}`);
    console.log(`Possuo habilidades em:`, skills);
    console.log(`Fique à vontade para explorar!`);
    
    console.log(`=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=`);

    console.log (`Para saber mais, acesse o meu linkedIn e o meu gitHub:`);
    console.log(`${linkedIn} =-~-=-~-= ${gitHub}`);

    console.log(`=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=-~-=`);

    console.log(`Ou você também pode me mandar uma mensagem no meu instagram:`);
    console.log(`https://instagram.com./izaacsanches`);
}

chamarCurriculo();


let verificaTrueSaudacao = () => {

    if (saudacao === true) { 
        return saudacao

    }

    else if (saudacao === false) {
        alert(`Vai com calma, amigo(a). Eu só queria te conhecer. Fique a vontade </3`)
    }

};

verificaTrueSaudacao();


let verificaNomeVisitante = () => {

    if (saudacao === true) {
        nomeVisitante = prompt('Que bom te conhecer, amigo(a). Qual o seu nome?')

    }

    if (nomeVisitante === null) {
        alert('Tudo bem, deixa pra lá. Fique a vontade pra curtir o projeto')
    }

    return nomeVisitante
    
}

verificaNomeVisitante();

let boasVindas = () => {

    if (nomeVisitante != null && saudacao === true) {
        alert(`Olá, ~~ ${nomeVisitante} ~~, seja muito mais que bem-vindo ao meu primeiro projeto. Por ser gentil e chegar até aqui, vai uma dica: Abre o console com o F12 e de uma olhadinha nos scripts para nos conhecermos melhor, que tal? Ah - e não esqueça de dar uma olhadinha no meu projeto. Muito obrigado!`)
}

} 


boasVindas();
 
console.log(`Obrigado pela visita ${nomeVisitante}, você é demais!`)