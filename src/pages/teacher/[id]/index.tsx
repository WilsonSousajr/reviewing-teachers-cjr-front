'use client';
import UnloggedHeader from "@/components/Header/UnloggedHeader";
import Header from "@/components/Header/Header";
import TeacherProfileHeader from "@/components/Teacher/TeacherProfileHeader";
import Review from "@/components/Teacher/Reviews";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [teacher, setTeacher] = useState<Teacher | null>(null);
    const [loading, setLoading] = useState(true);
    const [loadingTeacher, setLoadingTeacher] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    useEffect(() => {
        if (!router.isReady) return;

        const { id } = router.query;
        const reviewRoute = `http://localhost:3333/reviews/teacher/${id}`;
        const teacherRoute = `http://localhost:3333/teachers/${id}`;

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
                const response = await axios.get(teacherRoute);
                const fetchedTeacher = response.data;
                setTeacher(fetchedTeacher);
                console.log("Fetched teacher: ", fetchedTeacher);
            } catch (error) {
                console.error("Error fetching teacher: ", error);
            } finally {
                setLoadingTeacher(false);
            }
        }

        getReviews();
        getTeacher();
    }, [router.isReady, router.query]);

    return (
        <>
            {isLoggedIn ? <Header /> : <UnloggedHeader />}
            <div className="max-w-4xl mx-auto mt-8 p-4">
                {!loadingTeacher ? (
                    teacher && (
                        <TeacherProfileHeader
                            key={teacher.id}
                            name={teacher.name}
                            department={teacher.departament}
                            disciplines={["Teste I", "Teste IV"]}
                        />
                    )
                ) : (
                    <p>Carregando professor...</p>
                )}
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
                                    userId={post.userId} 
                                    date={post.createdAt}
                                    title={post.title}
                                    content={post.content}
                                    isLoggedIn={isLoggedIn} 
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
