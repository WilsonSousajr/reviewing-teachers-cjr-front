'use client'
import UnloggedHeader from "@/components/Header/unloggedHeader"
import TeacherProfileHeader from "@/components/Teacher/TeacherProfileHeader"
import Review from "@/components/Teacher/Reviews"
import axios from 'axios';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

interface Review {
    id: number;
    userId: number;
    teacherId: number;
    disciplineId: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}

export default function TeacherPage() {
    const router = useRouter();
    const {id} = router.query;

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    const route: string = "http://localhost:3333/reviews/teacher/"+id!;
    console.log(route)

    useEffect(() => {
        async function getReviews() {
            try {
                const response = await axios.get(route);
                setReviews(response.data);
                console.log("Fetched reviews: ", response.data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            } finally {
                setLoading(false);
            }
        }

        getReviews();
    }, []);

    const teacher = {
        name: "Rick Sanches",
        departament: "Ciencias da Computacao",
        disciplines: "Teste I, Teste II, Introdução a Testes"
    };

    return (
        <>
            <UnloggedHeader />
            <div className="max-w-4xl mx-auto mt-8 p-4">
                <TeacherProfileHeader
                    name={teacher.name}
                    department={teacher.departament}
                    disciplines={["Teste I", "Teste IV"]}
                />
                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">Publicações</h2>
                    {loading ? (
                        <p>Carregando reviews...</p>
                    ) : (
                        reviews.length > 0 ? (
                            reviews.map((post, index) => (
                                <Review 
                                    key={index}
                                    avatarUrl="teste.png"
                                    userName={`User ${post.userId}`} // Pode adaptar conforme necessário
                                    date={post.createdAt}
                                    title={post.title}
                                    content={post.content}
                                />
                            ))
                        ) : (
                            <p>Nenhuma review encontrada.</p>
                        )
                    )}
                </div>
            </div>
        </>
    );
}
