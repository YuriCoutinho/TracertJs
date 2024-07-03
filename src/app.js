// Importa o módulo nodejs-traceroute
const Traceroute = require('nodejs-traceroute');

try {
    // Cria uma nova instância do Traceroute
    const tracerouteInstance = new Traceroute();
    
    // Define o manipulador de eventos para quando o PID do processo é recebido
    tracerouteInstance.on('pid', (processId) => {
        console.log(`Process ID: ${processId}`);  // Imprime o PID do processo
    });
    
    // Define o manipulador de eventos para quando o destino é recebido
    tracerouteInstance.on('destination', (destinationAddress) => {
        console.log(`Destination: ${destinationAddress}`);  // Imprime o destino
    });
    
    // Define o manipulador de eventos para quando um hop (salto) é recebido
    tracerouteInstance.on('hop', (hopInfo) => {
        console.log(`Hop Information: ${JSON.stringify(hopInfo)}`);  // Imprime os detalhes do hop em formato JSON
    });
    
    // Define o manipulador de eventos para quando o traceroute é concluído
    tracerouteInstance.on('close', (exitCode) => {
        console.log(`Traceroute finished with exit code: ${exitCode}`);  // Imprime o código de encerramento
    });

    // Inicia o traceroute para o destino 'google.com'
    tracerouteInstance.trace('google.com');
    // Outra opção de destino comentada: 'one.one.one.one'
    // tracerouteInstance.trace('one.one.one.one');
} catch (error) {
    // Captura e imprime qualquer erro que ocorra durante a execução do traceroute
    console.error('Error occurred during traceroute:', error);
}