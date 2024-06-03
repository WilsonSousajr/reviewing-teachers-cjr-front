import UnloggedHeader from "@/components/Header/UnloggedHeader"
import UserPage from "@/components/User/UserPage"
import UserProfileHeader from "@/components/UserUnlogged/UserHeader"
import UserPost from "@/components/UserUnlogged/UserPost"

export default function teacherPage(){
    const teacher = {
        name: "Rick Sanches",
        departament: "Ciencias da Computacao",
        disciplines: "Teste I, Teste II, Introdução a Testes"
    }
    const reviews = [
        {
            avatarUrl: "http://localhost:3000/images/profile-pic.png",
            userName: "Morty Gamer",
            date: "17/04/2024, às 21:42",
            title: "João Frango - Surf",
            content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin",
            commentsCount: 2,
        },
        {
            avatarUrl: "http://localhost:3000/images/profile-pic.png",
            userName: "Morty Gamer",
            date: "15/04/2024, às 21:42",
            title: "Rick - Viagem Interdimensional",
            content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin",
            commentsCount: 5,
        },
    ];
    return(
        <main>
            <UnloggedHeader></UnloggedHeader>
            <div className="max-w-4xl mx-auto mt-8 p-4">
                <UserProfileHeader
                    name={teacher.name}
                    department={teacher.departament}
                    email={teacher.disciplines}
                    avatarUrl="https://s3-alpha-sig.figma.com/img/90bb/52ec/50263e63d50e09c255f65025237c62b4?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d6L9s66Em0cQ1cLRZ4nsZ632-FUsaUAwDew4PcouRs3nLGMLAZ7fwohfRcYDXMTzuzq-JNhwko1GKLtyud23z8ribJDmKJgRwQvc7nUDt5D-uGcttsIlwDIkNPHWtnW3m9O0oNw6dHxThYNp9iulf-AePh9i0Tv1d4zIdBhvVpyy4j22hqDm37mWJ1KYv3Vhg7em0tyJMEfoRRnZ7Tgw-17kSGWEpMxM03aQLI0CbtNrMgSfs5vLuQ9DJJ~fjkTBEpuqADNf5~60Clp29H48KDW-MQnK16EDH1W51zgOlS5nNZzCSIl7OPlL0DIhwTdvth~zxsbNlWUptKzy9J8DAw__"
                    bannerUrl=""
                />
                <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Publicações</h2>
                {reviews.map((post, index) => (
                    <UserPost 
                        key={index}
                        avatarUrl={post.avatarUrl}
                        userName={post.userName}
                        date={post.date}
                        title={post.title}
                        content={post.content}
                        commentsCount={post.commentsCount}
                    />
                )
              )
            }
            </div>
            </div>
            
        </main>
    )
}