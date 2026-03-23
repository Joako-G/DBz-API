import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { HomePage } from "../pages/HomePage";
import { ListCharacters } from "../pages/ListCharacters";
import { ProfilePage } from "../pages/ProfilePage";
import { CharacterPage } from "../pages/CharacterPage";
import { RegisterPage } from "../pages/RegisterPage";

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />

            <Route
                path='/'
                element={
                    <HomePage />
                }
            />

            <Route
                path='/characters'
                element={
                    <ListCharacters />
                }
            />

            <Route
                path='/profile'
                element={
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>
                }
            />

            <Route
                path='/characters-detail/:id'
                element={
                    <CharacterPage />
                }
            />

            <Route
                path='/register'
                element={
                    <RegisterPage />
                }
            />
        </Routes>
    )
}