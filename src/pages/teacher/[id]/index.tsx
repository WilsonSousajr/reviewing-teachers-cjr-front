'use client'
import UnloggedHeader from "@/components/Header/UnloggedHeader"
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
interface Teacher {
    id: number;
	name: string;
	departament: string;
	createdAt: string;
	updatedAt: string;
}


export default function TeacherPage() {
    const router = useRouter();
    
    const [reviews, setReviews] = useState([]);
    const [teacher, setTeacher] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingTeacher, setLoadingTeacher] = useState(true);
    let reviewRoute: string= "";
    let teacherRoute: string= "";
    
    
    useEffect(() => {
        if(!router.isReady) return
        const id = router.query;
        reviewRoute = 'http://localhost:3333/reviews/teacher/'+id?.id
        teacherRoute = 'http://localhost:3333/teachers/'+id?.id
        async function getReviews() {
            try {
                const response = await axios.get(reviewRoute);
                setReviews(response.data);
                console.log("Fetched reviews: ", response.data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            } finally {
                setLoading(false);
            }
        }

        async function getTeacher() {
            try {
                const response = await axios.get(teacherRoute)
                setTeacher(response.data)
            }catch (error){
                console.error("Error fetching teacher: ", error)
            }finally {
                setLoadingTeacher(false);
            }
        }
        
        getReviews();
        getTeacher();
    }, [router.isReady]);
    


    return (
        <>
            <UnloggedHeader />
            <div className="max-w-4xl mx-auto mt-8 p-4">
                {!loadingTeacher? (
                    teacher.map((professor: Teacher, index) =>(
                        <TeacherProfileHeader
                            key={index}
                            name={professor.name}
                            department={professor.departament}
                            disciplines={["Teste I", "Teste IV"]}
                        />
                    ))
                ) : 
                (<></>)}
                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">Publicações</h2>
                    {loading ? (
                        <p>Carregando reviews...</p>
                    ) : (
                        reviews.length > 0 ? (
                            reviews.map((post: Review, index) => (
                                <Review 
                                    key={index}
                                    avatarUrl="teste.png"
                                    userId={post.userId} // Pode adaptar conforme necessário
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
