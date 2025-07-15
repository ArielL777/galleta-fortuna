<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Fortuna;

class FortunasSeeder extends Seeder
{
    public function run(): void
    {
        $mensajes = [
            "Hoy, aprende a hacer algo nuevo.",
            "El mayor placer de la vida es hacer lo que la gente dice que no puedes.",
            "El que sonríe en vez de enfurecerse es siempre el más fuerte.",
            "El único modo de hacer un gran trabajo es amar lo que haces.",
            "La vida te pondrá obstáculos, pero los límites los pones tú.",
            "Si te caes siete veces, levántate ocho.",
        ];

        foreach ($mensajes as $mensaje) {
            Fortuna::create(['mensaje' => $mensaje]);
        }
    }
}