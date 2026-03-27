import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import { LoginPage } from "../pages/LoginPage";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { HomePage } from "../pages/HomePage";
// import { ListCharacters } from "../pages/ListCharacters";
// import { ProfilePage } from "../pages/ProfilePage";
// import { CharacterPage } from "../pages/CharacterPage";
// import { RegisterPage } from "../pages/RegisterPage";

const PageLogin = lazy(() => import('../pages/LoginPage'))
const PageCharacters = lazy(() => import('../pages/ListCharacters'))
const PageProfile = lazy(() => import('../pages/ProfilePage'))
const PageCharacter = lazy(() => import('../pages/CharacterPage'))
const PageRegister = lazy(() => import('../pages/RegisterPage'))

export function AppRoutes() {
    return (
        <Suspense fallback={<div style={{ margin: '0 auto', padding: '0 1rem' }}> Cargando </div>}>

            <Routes>
                <Route path='/login' element={<PageLogin />} />

                <Route
                    path='/'
                    element={
                        <HomePage />
                    }
                />

                <Route
                    path='/characters'
                    element={
                        <PageCharacters />
                    }
                />

                <Route
                    path='/profile'
                    element={
                        <ProtectedRoute>
                            <PageProfile />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path='/characters-detail/:id'
                    element={
                        <PageCharacter />
                    }
                />

                <Route
                    path='/register'
                    element={
                        <PageRegister />
                    }
                />

                {/* <Route path="*" element={<NotFoundPage} /> */}
            </Routes>
        </Suspense>
    )
}