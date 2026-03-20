import { type JSX } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: JSX.Element;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { token } = useAuthStore()

    if (!token) return <Navigate to='/login' />

    return children
}