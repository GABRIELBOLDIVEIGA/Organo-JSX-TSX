# Configuração

### Instalando dependencias.
```
npm i
```
# Passo a passo das configurações feitas antes de refatorar o código

Comandos base para migrar um projeto JSX para TSX.
```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```
<br/>

Comando para iniciar as configurações do compilador Typescript.
```
npx tsc --init
```
<br/>

Dentro de "compilerOptions" do arquivo tsconfig.json que foi gerado pelo comando acima, ative a opção a baixo, sem ela arquivos TSX não seram compilados.
```
"jsx": "react",    
```
<br/>

Dentro de "compilerOptions" do arquivo tsconfig.json ative a opção abaixo.
```
"baseUrl": "src",  
```
<br/>

A cima do "compilerOptions" do arquivo tsconfig.json, adicione o comando abaixo, junto com o comando acima os import se tornam absolutos.
```
"include": ["src"],
```
<br/>

O pacote do uuid que estava instalando originalmente nao funciona com o TS, instale este novo e não precisa fazer nem um alteração.
```
npm i --save-dev @types/uuid
```
