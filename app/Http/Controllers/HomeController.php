<?php

namespace App\Http\Controllers;

use App\Http\Resources\OutfitResource;
use App\Models\Outfit;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return OutfitResource::collection(Outfit::latest()->take(30)->get());
    }
}
