export default function unllogedFeed(){
    return(
        <main>
            <div id="unloggedHeader" className="w-screen h-20 bg-darkblue px-8 flex justify-between items-center mb-4">
                <img src="https://s3-alpha-sig.figma.com/img/7d4c/9277/04bd33df48766b783c0133aa94571ff9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=divasakUB9H0YN6XEK8UhxepnNx17Hh4gZIAFU4ymNWzQLXFfdphajzFIKhuRtyFz9LU2j5lm2U6P9HU7MNksXVwWMBLbF8q81qaZE~z1nONsormljfivIBALEAq1wmgIgJPR3nOm7IYzPqP~KY6qt3fyQeTKw-QDYrb-~2fvePxlJ5JMUZLqQcU-dShKYZZcmJZ6NXx03KDcwxIjNrGPz9Or5BdN10Qht-z1j6dvQ84xZgVHmtzow7pEyNQVYAWo8H-Da6636kAlik5Q9NTdMPqNM0m42rlJo84bnl4n5UqQwYHNd4TU6kZUnckuGAxwzaH9sPPJDuyX0IQLQVmtQ__" alt="UnB"
                width={75} height={75} />
                <div>
                    <button className="bg-neutral-500 text-white text-lg px-8 py-2 rounded-lg outline outline-2">Loggin</button>
                </div>
            </div>    
            <div id="feed">
                <div className="flex justify-end mr-28">
                    <input placeholder="Buscar Professor(a)" className="placeholder:flex placeholder:justify-center text-xl pr-40 pl-4 py-2 rounded-xl"></input>
                </div>
                <div id="new-teachers" className="mt-[-1rem] pl-40">
                    <h1 className="text-3xl">Novos Professores</h1>
                </div>
            </div>        
        </main>
    )
}