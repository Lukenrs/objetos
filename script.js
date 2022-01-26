let perfil={
    nome:"luiz",
    idade:19,
    profissão:"estudante"
}
perfil.hobbie = "Jogar"
delete perfil.idade
console.log(perfil)

let cadastro = [
    {
    nome: "Luiz",
     idade:19,
     telefone:994843796,
     amigos:["Camilly", "Andrew", "Paulo","Ana"],
     
},
    {nome: "André",
     idade:29,
     telefone:9943445476,
     amigos:["Breno", "Lacan", "Fernando","Pedro"]
     
},
{
     nome: "Beatriz",
     idade:15,
     telefone:994844232,
     amigos:["Marcos", "Nie", "Rye","Leonardo"]
     
},
{
    nome: "Atreus",
     idade:35,
     telefone:994843796,
     amigos:["Diana", "Leona", "Aurelion","Taric"]
     
},
{
   nome: "Darius",
     idade:23,
     telefone:994843796,
     amigos:["Draven", "Sammira", "Vladimir","Katarina"],
     
},]

console.log(cadastro)

for(let i=0;i<cadastro.length;i++){
    console.log(cadastro[i].amigos[2])
}