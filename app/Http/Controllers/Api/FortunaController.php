<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Fortuna;

class FortunaController extends Controller
{
    public function getRandom()
    {
        $fortuna = Fortuna::inRandomOrder()->first();
        
        return response()->json($fortuna);
    }
}