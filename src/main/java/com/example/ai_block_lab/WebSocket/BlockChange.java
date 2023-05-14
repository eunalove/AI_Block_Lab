package com.example.ai_block_lab.WebSocket;

public class BlockChange {

    String element;
    String name;
    String newValue;
    String oldValue;
    String type;

    public BlockChange(String element, String name, String newValue, String oldValue, String type) {
        this.element = element;
        this.name = name;
        this.newValue = newValue;
        this.oldValue = oldValue;
        this.type = type;
    }

    public String getElement() {
        return element;
    }

    public void setElement(String element) {
        this.element = element;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNewValue() {
        return newValue;
    }

    public void setNewValue(String newValue) {
        this.newValue = newValue;
    }

    public String getOldValue() {
        return oldValue;
    }

    public void setOldValue(String oldValue) {
        this.oldValue = oldValue;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }


}
