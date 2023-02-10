package com.cloud.viewevent;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.CompoundButton;
import android.widget.Toast;

import com.cloud.viewevent.databinding.ActivityMainBinding;

public class MainActivity extends AppCompatActivity implements View.OnClickListener,
        CompoundButton.OnCheckedChangeListener {
    ActivityMainBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        //이벤트 등록
        binding.bellName.setOnClickListener(this);
        binding.label.setOnClickListener(this);
    }

    //Toast
    private void showToast(String message){
        Toast toast = Toast.makeText(this, message, Toast.LENGTH_SHORT);
        toast.show();
    }

    @Override
    public void onClick(View view) {
        if(view == binding.bellName){
            showToast("bell text click event...");
        }else if(view == binding.label){
            showToast("label text click event...");
        }
    }

    @Override
    public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
        if(buttonView == binding.repeatCheck){
            showToast("repeate checkbox is " + isChecked);
        }else if(buttonView == binding.vibrate){
            showToast("vibrate checkbox is " + isChecked);
        }else if(buttonView == binding.onOff){
            showToast("switch is " + isChecked);
        }
    }
}