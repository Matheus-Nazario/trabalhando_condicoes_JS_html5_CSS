var agora =  new Date ();
var dia = agora.getDay();

/*
0 = Domingo
1 = Segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sábado
7 = domingo
*/


switch (dia) {
    case 0:
        console.log("Domingo")
        break;
        case 1:
            console.log("Segunda")
            break;
            case 2:
                console.log("terça")
                break;
                case 3:
                    console.log("Quarta")
                    break;
                    case 4:
                        console.log("Quinta")
                        break;
                        case 5:
                            console.log("sexta")
                            break;
                            case 6:
                                console.log("sábado")
                                break;
                                                                                    
    default:
        console.log("Erro - Dia inválido!")
        break;
}