function tabelaDeMult(n){
    let resultado = []
    for (let i = 0; i <= n; i++){
      resultado[i]=[]
    for (let j = 0; j <= n; j++){
        resultado[i][j]=i*j
        
     }
    } 
    return resultado;
}console.table(tabelaDeMult(10))
   


