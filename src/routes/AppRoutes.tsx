import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { HomePage } from "../pages/HomePage";

const PageLogin = lazy(() => import('../pages/LoginPage'))
const PageCharacters = lazy(() => import('../pages/ListCharacters'))
const PageProfile = lazy(() => import('../pages/ProfilePage'))
const PageCharacter = lazy(() => import('../pages/CharacterPage'))
const PageRegister = lazy(() => import('../pages/RegisterPage'))

export function AppRoutes() {
    return (
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
    )
}