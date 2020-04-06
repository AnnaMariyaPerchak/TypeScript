let message=document.getElementById('message') as HTMLElement

let number:any=prompt('input number')

number===0 ? message.innerHTML=`Number is 0`
            : number%2==0 ? message.innerHTML=`Number ${number} is even`
                            : number%2!=0 ? message.innerHTML=`Number ${number} is odd`
                                            : message.innerHTML=`${number} is not a number`
