import { Profile } from "../components/Profile"
import { useAuthStore } from "../store/useAuthStore"

export function ProfilePage() {
    const { user } = useAuthStore()

    console.log('User Inside: ', user)
    return (
        <>
            <Profile user={user!} />
        </>
    )
}