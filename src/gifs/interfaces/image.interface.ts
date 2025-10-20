export interface robotsProps {
    series: number;
    id: number;
    name: string;
    weapon: string;
    avatar: string;
    sprite1: string;
    weakness: string;
    stageImg: string;
}

export interface ApiResponse {
    ok: boolean;
    statusCode: number;
    robot?: robotsProps;  // ← Opcional porque puede no venir
    msg?: string;         // ← Para mensajes de error
}