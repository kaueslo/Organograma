import './Banner.css'

function Banner(){
    //isso é JSX, ou seja, parece HTML mas não é, é JS, o react 
    //le isso e faz um append no component q vamos importar ele
    return(
        <header className='banner'>
            <img 
                src="/imagens/banner.png" 
                alt="O banner principal da página do organo"
            />
        </header>
        
    )
}

export default Banner