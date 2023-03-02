<?php

namespace App\Http\Controllers;

use App\Http\Resources\OutfitResource;
use App\Models\Outfit;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class OutfitController extends Controller
{
    public function index()
    {
        return OutfitResource::collection(
            Outfit::where('user_id', auth()->user()->id)->latest()->get()
        );
    }

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

    public function show(Outfit $outfit)
    {
        if (auth()->user()->id !== $outfit->user->id) {
            return abort(403);
        }

        return new OutfitResource($outfit);
    }

    public function update(Request $request, Outfit $outfit)
    {
        if (auth()->user()->id !== $outfit->user->id) {
            return abort(403);
        }

        $request->validate([
            'outfit' => 'nullable | image',
            'post_date' => 'required'
        ]);

        $description = $request->input('description');
        $post_date = \Carbon\Carbon::parse($request->post_date)->timezone('Asia/Tokyo')->format('Y-m-d');
        $item_id = $request->item_id;

        if ($request->file('outfit')) {
            File::delete($outfit->outfit_image);
            $outfit_image = 'storage/' . $request->file('outfit')->store('outfitsImages', 'public');
            $outfit->outfit_image = $outfit_image;
        }

        $outfit->description = $description;
        $outfit->post_date = $post_date;
        $outfit->item_id = $item_id;
        return $outfit->save();
    }

    public function destroy(Outfit $outfit)
    {
        if (auth()->user()->id !== $outfit->user->id) {
            return abort(403);
        }

        return $outfit->delete();
    }
}
