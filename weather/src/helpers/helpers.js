export function titleCase(str) {

    // console.log('titleCase: ' + str);
    // const newStr = str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    // console.log(newStr);
    
    // const newStr = str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '); 
    
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    
    // const newDesc = desc.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');   
}