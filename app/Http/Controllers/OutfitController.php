<?php

namespace App\Http\Controllers;

use App\Models\Outfit;
use Carbon\Carbon;
use Illuminate\Http\Request;

class OutfitController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'outfit' => 'required | image',
            'post_date' => 'required'
        ]);

        $user_id = auth()->user()->id;
        $outfit_image = 'storage/' . $request->file('outfit')->store('outfitsImages', 'public');
        $description = $request->input('description');
        $post_date = \Carbon\Carbon::parse($request->post_date)->timezone('Asia/Tokyo');
        $item_id = $request->item_id;

        $outfit = new Outfit();
        $outfit->user_id = $user_id;
        $outfit->outfit_image = $outfit_image;
        $outfit->description = $description;
        $outfit->post_date = $post_date;
        $outfit->item_id = $item_id;
        $outfit->save();

        return response($outfit, 201);
    }
}
