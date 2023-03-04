```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```
Comandos base para migrar um projeto JSX para TSX

```
npx tsc --init
```
Comando para iniciar as configurações do compilador Typescript

```
"jsx": "react",    
```
Dentro de "compilerOptions" adicione o comando acima, 
sem ele arquivos TSX não seram compilados.

```
npm i --save-dev @types/uuid
```
O pacote do uuid que estava instalando originalmente nao funciona com o TS, instale este novo e não precisa fazer nem um alteração.