const SITE_URL = 'https://fitness40.ru'; 


export function fetchFitnessCenters(){
    return fetch(`${SITE_URL}/api/fitnessCenters`,  
            {method: 'get',
             headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                      }
            }
    )
}


// Запрос краткой информации по статьям блога.
export function fetchBlog(n, o){
  return fetch(`${SITE_URL}/api/blog?number=${n}&offset=${o}`,  
          {method: 'get',
           headers: {
                      'Content-Type': 'application/json;charset=utf-8'
                    }
          }
  )
}


// Запрос полной версии статьи блога.
export function fetchBlogArticle(id){
  return fetch(`${SITE_URL}/api/blogArticle?id=${id}`,  
          {method: 'get',
           headers: {
                      'Content-Type': 'application/json;charset=utf-8'
                    }
          }
  )
}


// Запрос полной версии статьи блога.
export function fetchLogin(login, password){
  return fetch(`${SITE_URL}/api/login`,  
          {method: 'post',
           headers: {
                      'Content-Type': 'application/json;charset=utf-8'
                    },
           body: JSON.stringify({login, password})
          }
  )
}

