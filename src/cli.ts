import * as readline from 'readline';

export function promptAction(lista: any) {
    const cli = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    cli.question('Choose an option: \n- add \n- list \n- check \n- uncheck \n- remove \n- quit\n... ', (action) => {
        switch (action.trim().toLowerCase()) {
            case 'add':
                cli.question('Enter item name: ', (name) => {
                    lista.add(name);
                    promptAction(lista);
                });
                break;
            case 'check':
                cli.question('Enter item id to check: ', (id) => {
                    lista.check(parseInt(id), true);
                    promptAction(lista);
                });
                break;
            case 'uncheck':
                cli.question('Enter item id to uncheck: ', (id) => {
                    lista.uncheck(parseInt(id));
                    promptAction(lista);
                });
                break;
            case 'remove':
                cli.question('Enter item id to remove: ', (id) => {
                    lista.remove(parseInt(id));
                    promptAction(lista);
                });
                break;
            case 'list':
                console.log(lista.getAll());
                promptAction(lista);
                break;
            case 'quit':
                cli.close();
                break;
            default:
                console.log('Error');
                promptAction(lista);
                break;
        }
    });
}