<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function create(Request $request)
    {
        $user_id = auth()->user()->id;
        $item_image = 'storage/' . $request->file('item')->store('itemsImages', 'public');

        $item = new Item();
        $item->user_id = $user_id;
        $item->item_name = $request->item_name;
        $item->item_image = $item_image;
        $item->save();

        $category = new Category();
        $category->category_id = $request->category_id;
        $category->category_name = $request->category_name;
        $item->category()->save($category);

        return response($item, 201);
    }
}
