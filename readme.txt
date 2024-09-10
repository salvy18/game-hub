git command

git init
git add .
git commit -m "Initial commit"


css to use - chakra
https://v2.chakra-ui.com/

Games API 
====== > 
https://rawg.io/login?forward=developer

Developer info
Edit
Your current plan
free
Number of requests left for the period
20000
Number of requests will renew on
10/5/2024
Full name
Rod Selmo
Contact email
salvy18@gmail.com
Site/App url
http://localhost:5173/?
Describe in a few words how you would like to use RAWG’s API
Training and personal project
url
https://api.rawg.io/docs/#operation/games_list
API Key
8f8ba71e8b694eeea09a7d38558ac6a8

<========

HTTP Request
npm i axios

icons
npm i react-icons@4.7.1


----- Some commands
if (error instanceof CanceledError) return;

when Argument of type {} is not assignable to parameter of type something... to fix it:
The problem
const [ gameQuery, SetGameQuery ]  = useState<GameQuery>({})
The fix
const [ gameQuery, SetGameQuery ] = useState<GameQuery>({} as GameQuery )
