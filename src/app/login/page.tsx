import LoginForm from '@/components/loginForm';
import { Card } from '@/components/ui/card';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <Card className="w-full max-w-sm">
        <LoginForm />
      </Card>
    </main>
  );
}
